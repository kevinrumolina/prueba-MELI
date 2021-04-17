import Result from './result.js';
import { createResult } from './createComponents.js';


const apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?',
    url = document.URL;
let resultsArray = [];

const getSearchParam = (url) => url.split('?')[1];
const queryParam = getSearchParam(url);

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

fetch(`${apiUrl}${queryParam}`)
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

        console.log(JSON.stringify(resultReturned(resultsArray)));
    });


