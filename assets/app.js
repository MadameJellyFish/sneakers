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

let qProduitBasket = document.querySelector('#qProduitBasket');
let prixTotal = document.querySelector('#prixTotal');
let prixProduitBasket = document.querySelector('#prixProduitBasket');

let prix = document.querySelector('#prix');
let prixOrig = document.querySelector('#prixOrig');

let iconDelete = document.querySelector('#icon-delete');



addToCartBtn.addEventListener('click', displayCompterPanier);

function displayCompterPanier() {
    compterPanier.innerText = compterGnrl.innerText;

    if (compterPanier.innerText > 0) {
        compterPanier.classList.remove('hide');
    } else {
        compterPanier.classList.add('hide');
    }
    updateCartDisplay();

    // calcule(prixProduitBasket);
    let nb1 = parseFloat(prix.innerText);
    let qnb2 = parseInt(qProduitBasket.innerText);
    let rslt = parseFloat(prixTotal.innerText);

    if (rslt = nb1 * qnb2) {
        prixTotal.innerText = rslt;
        prixProduitBasket.innerText = nb1;
    };
}

function updateCartDisplay() {
    // affiche tout l'information du shopping
    if (compterPanier.innerText > 0) {
        cartEmptyText.classList.add('hide');
        containerAchatBasket.classList.remove('hide');
    } else {
        containerAchatBasket.classList.add('hide');
        cartEmptyText.classList.remove('hide');
    }
}

// affiche la div de productis achete, les detailles de l'achat
let iconCart = document.querySelector('#icon-cart');
let basket = document.querySelector('.basket');
iconCart.addEventListener('click', displayBasket)

function displayBasket() {
    basket.classList.toggle('toggle');

    updateCartDisplay();
}

// pannier bnt delete
iconDelete.addEventListener('click', poubelle)
function poubelle() {
    containerAchatBasket.classList.add('hide');
    cartEmptyText.classList.remove('hide');
}

// caroussel images site
let imgOverlay = document.querySelector('#imgOverlay');
let produitLittles = document.querySelectorAll('.produitLittle');
let produitBig = document.querySelector('#produitBig');
//button grande image
let detaille = document.querySelector('.detaille');
imgOverlay.addEventListener('click', displayZoom);
console.log(produitBig);
function displayZoom(){
    if(detaille.style.display='none'){
        detaille.style.display='block';
        produitBig.src= this.src;
    }
    
}

// creation de boucle parce que j'ai bcp des elements dans mon tableau, 4
produitLittles.forEach(function(item){
item.addEventListener('click', changeItem)
});

// changer l'image avec zoom
function changeItem (){
// console.log(this.src);

// con replace cambie la foto pequena por la grande, cambio la terminacion del nombre con replace
imgOverlay.src=this.src.replace("-thumbnail", '');
}


//modal images zoom
let close= document.querySelector('.close');
let btnPrevious = document.querySelector('#btnPrevious');
let btnNext = document.querySelector('#btnNext');



