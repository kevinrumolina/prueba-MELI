/*Schema para items en la pagina de resultados*/
const resultBaseHTML = '<img class="product-category__image"><div class="product-category__info--container"><p class="product-category__price"></p><img class="product-category__shipping" src="./assets/ic_shipping.png" alt="Shipping logo" width="18"><p class="product-category__state"></p><h2 class="product-category__description"></h2></div>'

const createResult = (result) => {
    const mainContainer = document.querySelector('.main-container')
    const productContainer = Object.assign(document.createElement('article'), {className: 'product-category', id: result.id});

    productContainer.innerHTML = resultBaseHTML;

    const productImage = productContainer.querySelector('.product-category__image');
    const productPrice = productContainer.querySelector('.product-category__price');
    const productState = productContainer.querySelector('.product-category__state');
    const productDescription = productContainer.querySelector('.product-category__description');
    const productShipping = productContainer.querySelector('.product-category__shipping');

    Object.assign(productImage, {src: result.picture, alt: result.title});
    productPrice.innerText = '$ ' + result.price.amount;
    productState.innerText = result.state;
    productDescription.innerText = result.title;

    if (result.free_shipping === false) {
        productShipping.parentElement.removeChild(productShipping);
    }

    mainContainer.appendChild(productContainer);
}

/*Schema de producto para la pagina de detalles*/
const detailBaseHTML = '<article class="product-detail"><img class="product-detail__image"><div class="product-detail__container"><p class="product-detail__container--condition"></p><h2 class="product-detail__container--title"></h2><p class="product-detail__container--price"></p><img class="product-detail__container--shipping" src="./assets/ic_shipping.png" alt="Shipping logo" width="36"><div class="product-detail__container--button">Comprar</div></div></article><article class="product-description"><h2 class="product-description__title">Descripción del producto</h2><p class="product-description__excerpt"></p></article>';

const createDetail = (result) => {
    const mainContainer = document.querySelector('.main-container')
    const productContainer = Object.assign(document.createElement('article'), {id: result.id});

    productContainer.innerHTML = detailBaseHTML;

    const productImage = productContainer.querySelector('.product-detail__image');
    const productCondition = productContainer.querySelector('.product-detail__container--condition');
    const productTitle = productContainer.querySelector('.product-detail__container--title')
    const productPrice = productContainer.querySelector('.product-detail__container--price');
    const productShipping = productContainer.querySelector('.product-detail__container--shipping');

    Object.assign(productImage, {src: result.picture, alt: result.title});
    productCondition.innerText= `${result.condition} - ${result.sold_quantity} vendidos`;
    productTitle.innerText = result.title;
    productPrice.innerText = '$ ' + result.price.amount;

    if (result.free_shipping === false) {
        productShipping.parentElement.removeChild(productShipping);
    }

    mainContainer.appendChild(productContainer);
}

const createDetailDescription = (apiUrl, id) => {
    fetch(`${apiUrl}items/${id}/description`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const productDescription = document.querySelector('.product-description__excerpt');
        const itemDescription = response.plain_text;

        productDescription.innerText = itemDescription
    });
}


export { createResult, createDetail, createDetailDescription };