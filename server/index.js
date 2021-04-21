const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const apiUrl = 'https://api.mercadolibre.com';

const getItem = (item) => {
    return {
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state: item.address.state_name
    };
};

const resultObject = (categories, items) => {
    return {
        author: {
            name: 'Kevin',
            lastname: 'Ruiz Molina'
        },
        categories: categories,
        items: items
    }
};

const detailObject = (item, description) => {
    return {
        author: {
            name: 'Kevin',
            lastname: 'Ruiz Molina'
        },
        item: {
            item: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price
            },
            picture: item.pictures[0].url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: description.plain_text,
            category: item.category_id
        }
    }
}

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/items', (req, res) => {
    if(req.query.search) {
        axios.get(`${apiUrl}/sites/MLA/search?q=${req.query.search}`).then(response => {
            let itemsArray = [];

            for (let i=0; i<=3; i++) {
                const resultItem = getItem(response.data.results[i]);
                itemsArray.push(resultItem);
            }

            axios.get(`${apiUrl}/categories/${response.data.results[0].category_id}`).then(response => {
                let categoryArray = [];

                for (let i=0; i<response.data.path_from_root.length; i++) {
                    categoryArray.push(response.data.path_from_root[i].name);
                }
                
                console.log(categoryArray, itemsArray);
                res.status(200).send(resultObject(categoryArray, itemsArray));
            })
        })
        .catch(error => {
            console.log(error);
        });
    } else {
        res.status(404).send('Not Found');
    }
});

app.get('/api/items/:id', (req, res) => {
    if(req.params.id) {
        axios.all([
            axios.get(`${apiUrl}/items/${req.params.id}`),
            axios.get(`${apiUrl}/items/${req.params.id}/description`)
        ]).then(axios.spread((response1, response2) => {
            console.log(detailObject(response1.data, response2.data));
            res.status(200).send(detailObject(response1.data, response2.data));
        })).catch(error => {
            console.log(error);
        });
    } else {
        res.status(404).send(req.params.id);
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});