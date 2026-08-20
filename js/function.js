
//Desplazamiento de las barras laterales para carrito y menu lateral izquierdo
const header = document.querySelector("header");
const cartIcon = header.lastElementChild;

const menuIcon = header.firstElementChild;
const leftMenu = document.querySelector(".leftMenu");
const menuLeftX = document.querySelector(".leftMenu__x");

const cart = document.querySelector(".cart");
const cartX = document.querySelector(".cart__x")



cartIcon.addEventListener("click", () => {
    cart.classList.add("show")
})

cartX.addEventListener("click", () => {
    cart.classList.remove("show")
})

menuIcon.addEventListener("click", () => {
    leftMenu.classList.add("show");
})

menuLeftX.addEventListener("click", () => {
    leftMenu.classList.remove("show");
})


//Mensajes de proximamente para las opciones del menu literal
const menuOptions = document.querySelectorAll(".leftMenu h2");

menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
        alert("Próximamente");
    });
});



//Cambiar el icono del carrito de los productos al pasar el mouse por encima
const plusCart = document.querySelectorAll(".products__cart");
plusCart.forEach((plusCart) => {
    plusCart.addEventListener("mouseover", () => {
        plusCart.src = "img/plus.svg";
    });

    plusCart.addEventListener("mouseout", () => {
        plusCart.src = "img/cart.svg";
    });
});

//Agregar nuevos items al carrito
const addToCart = document.querySelectorAll(".products__cart");
const cartItem = document.querySelector(".cart__newItems");

let cartCounter = 0;

const counter = document.querySelector(".header__cartCounter");
const emptyMsg = document.querySelector(".cart__empty");

const buyButton = document.querySelector(".cart__buyButton");

buyButton.style.display = "none";

addToCart.forEach((icon) =>{
    icon.addEventListener("click", () => {
        const product = icon.closest(".products__item");

        const image = product.querySelector(".products__img").src;
        const name = product.querySelector(".products__h3").textContent;
        const price = product.querySelector(".products__p").textContent;

        const newCartProduct = document.createElement("section");
        newCartProduct.classList.add("cart__item");

        newCartProduct.innerHTML = `
            <img class="cart__img" src="${image}" alt="">
            <p class="cart__p">${name}</p>
            <p class="cart__p cart__p--blond">${price}</p>
            <i class="cart__icon"><img src="img/delete.png" alt="Icono Quitar" class="cart__icon--delete"></i>
        `;

        cartItem.appendChild(newCartProduct);
        //Para el contador

        cartCounter++;
        counter.textContent = cartCounter;
        emptyMsg.style.display = "none";

        counter.style.display = "flex"; //Para aparecer el circulo rojo
        buyButton.style.display = "block";

        //Para poder eliminar los productos que se agregan
        const deleteIcon = newCartProduct.querySelector(".cart__icon");
        
        deleteIcon.addEventListener("click", () => {
            newCartProduct.remove();

            cartCounter--;

            counter.textContent = cartCounter;

            if (cartCounter === 0) {
                emptyMsg.style.display = "block";
                counter.textContent = "";

                counter.style.display = "none"; //Para desaparecer el circulo rojo
                buyButton.style.display = "none";
            }
        });
    
    });
});
