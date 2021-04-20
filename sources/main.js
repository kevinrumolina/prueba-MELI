import { fetchBreadcrumbs, createBreadcrumb, createResult, createDetail } from './createComponents.js';

const apiUrl = 'http://localhost:3000',
    url = document.URL;

const getSearchParam = (url) => url.split('?')[1];
const queryParam = getSearchParam(url);

const loadDom = () => {
    if(queryParam.includes('search=')){
        fetch(`${apiUrl}/api/items?${queryParam}`, {'Sec-Fetch-Mode': 'no-cors'})
        .then(response => response.json())
        .then(response => {
            response.categories.forEach(category => {
                createBreadcrumb(category);
            });
    
            response.items.forEach(result => {
                createResult(result);
            });
    
            return document.querySelectorAll('.product-category');
        });
    } else if (queryParam.includes('items=')) {
        const param = queryParam.split('items=')[1];

        fetch(`${apiUrl}/api/items/${param}`)
        .then(response => response.json())
        .then(response => {
            console.log(param)
            fetchBreadcrumbs(`https://api.mercadolibre.com/categories/${response.item.category}`);

            createDetail(response.item);
        });
    }
};

const init = async() => {
    loadDom()
}

init();
