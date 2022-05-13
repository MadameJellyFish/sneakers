// achat cantite plus et moins

let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');

plus.addEventListener('click', ajouter)

function ajouter() {

    let compterGnrl = document.querySelector('#compterGnrl');
    compterGnrl.innerText++;
}

minus.addEventListener('click', decrementer)

function decrementer() {
    if (compterGnrl.innerText == 0) {
        return;
    }
    compterGnrl.innerText--;
}

// la quantite des produits achetés sur le panier dans le nav bar
let addToCartBtn = document.querySelector('#addToCartBtn');
let compterPanier = document.querySelector('#compterPanier');
let containerAchatBasket = document.querySelector('#containerAchatBasket');
let cartEmptyText = document.querySelector('#cartEmptyText');
addToCartBtn.addEventListener('click', displayCompterPanier);

function displayCompterPanier() {
    compterPanier.innerText = compterGnrl.innerText;
    if (compterPanier.style.display == 'none') {
        compterPanier.style.display = 'block';
    }

    if (compterGnrl.innerText > 0) {
        compterPanier.style.display = 'block';
    } else {
        compterPanier.style.display = 'none';
    }

    if (compterPanier.innerText > 0) {
        showCartFull();
    } else {
        showCartEmpty();
    }
}

function showCartFull() {
    if (containerAchatBasket.style.display == 'block') {
        containerAchatBasket.style.display = 'none';
    } else {
        containerAchatBasket.style.display = 'block';
    }
}

function showCartEmpty() {
    cartEmptyText.style.display = 'block';
}



// if (basket.style.display == 'block') {
//     basket.style.display = 'none'
// } else {
//     basket.style.display = 'block';
// }



// affiche la div de productis achete, les detailles de l'achat
let iconCart = document.querySelector('#icon-cart');
let basket = document.querySelector('.basket');
iconCart.addEventListener('click', displayBasket)

function displayBasket() {
    if (basket.style.display == 'block') {
        basket.style.display = 'none'
    } else {
        basket.style.display = 'block';
    }
}


// let containerAchatBasket = document.querySelector('#containerAchatBasket');
// let cartEmptyText = document.querySelector('#cartEmptyText');







// let compterPanier = document.querySelector('#compterPanier');
// let basket = document.querySelector('.basket');
// let cartEmptyText = document.querySelector('#cartEmptyText');
// if(compterPanier.style.display == '' || compterPanier.style.display == 'none' &&  basket.style.display == '' || basket.style.display == 'none'){
//     compterPanier.style.display = 'block';
//     basket.style.display = 'block';

// } else if (compterPanier.style.display == 'block' && basket.style.display == 'block') {
//     compterPanier.style.display = 'none';
//     basket.style.display = 'none';
// }
// else if(compterGnrl.innerText > 0 && basket.style.display == 'block'){
//     cartEmptyText.style.display = 'none';
// }