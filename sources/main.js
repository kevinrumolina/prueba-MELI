import Result from './Result.js';
import ItemDetail from './ItemDetail.js'
import { fetchBreadcrumbs, createResult, createDetail, createDetailDescription } from './createComponents.js';


const apiUrl = 'https://api.mercadolibre.com',
    url = document.URL;
let resultsArray = [];

const getSearchParam = (url) => url.split('?')[1];
const queryParam = getSearchParam(url);

const loadDom = () => {
    if(queryParam.includes('q=')){
        fetch(`${apiUrl}/sites/MLA/search?${queryParam}`)
        .then(response => response.json())
        .then(response => {
            fetchBreadcrumbs(`${apiUrl}/categories/${response.results[0].category_id}/`);
    
            for (let i=0; i<=3; i++) {
                const resultItem = new Result(response.results[i]);
                resultsArray.push(resultItem);
            }
    
            resultsArray.forEach(result => {
                createResult(result)
            });
    
            return document.querySelectorAll('.product-category');
        });
    } else if (queryParam.includes('items=')) {
        const param = queryParam.split('=')[1];
        console.log(param);
        fetch(`${apiUrl}/items/${param}`)
        .then(response => response.json())
        .then(response => {
            fetchBreadcrumbs(`${apiUrl}/categories/${response.category_id}`);
    
            const resultItem = new ItemDetail(response);
    
            createDetail(resultItem);
            createDetailDescription(apiUrl, resultItem.id);
        });
    }
};

const init = async() => {
    loadDom()
}

init();
