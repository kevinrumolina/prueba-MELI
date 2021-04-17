/*Schema para items en la pagina de resultados*/
const resultBaseHTML = '<img class="product-category__image"><div class="product-category__info--container"><p class="product-category__price"></p><img class="product-category__shipping" src="./assets/ic_shipping.png" alt="Shipping logo" width="18"><p class="product-category__state"></p><h2 class="product-category__description"></h2></div>'

const createResult = (result) => {
    const mainContainer = document.querySelector('.main-container')
    const productContainer = Object.assign(document.createElement('article'), {className: 'product-category'});

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


export { createResult };