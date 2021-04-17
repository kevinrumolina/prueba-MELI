import Result from './Result.js';
import ItemDetail from './ItemDetail.js'
import { createBreadcrumb, createResult, createDetail, createDetailDescription } from './createComponents.js';


const apiUrl = 'https://api.mercadolibre.com/',
    url = document.URL;
let resultsArray = [];

const getSearchParam = (url) => url.split('?')[1];
const queryParam = getSearchParam(url);

const searchChecker = (queryParam) => {
    if (queryParam.contains('q=')) {
        return true;
    }
}

console.log(getSearchParam(url));

const resultReturned = (itemArray) => {
    const result = {
        author: {
            name: 'Kevin',
            lastname: 'Ruiz'
        },
        items: itemArray
    };

    return result;
}
if(queryParam.includes('q=')){
    fetch(`${apiUrl}sites/MLA/search?${queryParam}`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        for (let i=0; i<=3; i++) {
            const resultItem = new Result(response.results[i]);
            resultsArray.push(resultItem);
        }

        resultsArray.forEach(result => {
            createResult(result)
        })

        const finalResult = resultReturned(resultsArray);

        console.log(JSON.stringify(resultReturned(finalResult)));
    });
} else if (queryParam.includes('items=')) {
    const param = queryParam.split('=')[1];
    console.log(param);
    fetch(`${apiUrl}items/${param}`)
    .then(response => response.json())
    .then(response => {
        console.log(response);

        fetch(`https://api.mercadolibre.com/categories/${response.category_id}/`)
        .then(response => response.json())
        .then(response => {
            const breadCrumbArray = response.path_from_root;

            breadCrumbArray.forEach(category => {
                createBreadcrumb(category);
            })
            console.log(response);
        })

        const resultItem = new ItemDetail(response);

        createDetail(resultItem);
        createDetailDescription(apiUrl, resultItem.id);

        console.log(JSON.stringify(resultReturned(resultItem)));
    });
}



