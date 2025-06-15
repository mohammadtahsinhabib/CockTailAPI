const loadAllProduct = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then((res) => res.json())
        .then((data) => {
            displayProduct(data.drinks);
        });
};


const searchCocktail = () => {
    const CocktailName = document.getElementById("search-field").value;
    if (CocktailName === "") return;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${CocktailName}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.drinks) {
                displayProduct(data.drinks);
            }else {
                document.getElementById("product-container").innerHTML = "<h4>No drinks found</h4>";
            }
        });
};

const displayProduct = (products) => {
    const productContainer = document.getElementById("product-container");

    products.forEach((product) => {
        // div parent product container
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <img class="card-img" src=${product.strDrinkThumb} alt="" />
        <h5>${product.strDrink}</h5>
        <h3>Category: ${product.strCategory}</h3>
        <p>${product.strInstructions}</p>
        <button onclick="singleProduct('${product.idDrink}')">Details</button>
        <button onclick="handleAddToCart('${product.strDrink}','${product.strDrinkThumb
            }')" >Add To Cart</button>
        `;
        productContainer.appendChild(div);
    });
};

let serial = 1;
const handleAddToCart = (name, image) => {
    if (serial > 7) {
        alert("Cart limit Exceeded. You can't add more than 7 items.");
        return;
    }

    const cartCount = document.getElementById("count").innerText;

    let convertedCOunt = parseInt(cartCount);
    convertedCOunt = convertedCOunt + 1;
    document.getElementById("count").innerText = convertedCOunt;

    console.log(convertedCOunt);

    const container = document.getElementById("cart-main-container");
    console.log(name, image);

    const div = document.createElement("div");
    div.classList.add("cart-info");
    div.innerHTML = `
        <p>${serial++}</p>
        <img src="${image}" style="width: 40px; height: 40px; ">
        <p>${name}</p>
    `;
    container.appendChild(div);
    
};

const singleProduct = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
            const drink = data.drinks[0];
            const modalBody = document.getElementById("modal-body");

            modalBody.innerHTML = `
        <div class="text-left">
          <h4 style="margin-bottom:3px">  ${drink.strDrink}</h4>
          <img src="${drink.strDrinkThumb}" class="img-fluid mb-4 mt-3" style="max-height: 400px;border-radius:5px">
          <h4><b>Details</b></h4>
          <p><b>Category</b>:${drink.strCategory}</p>
          <p><b>Alcoholic:</b> ${drink.strAlcoholic}</p>
          <p><b>Glass:</b>${drink.strGlass}</p>
          <p><b>Instructions:</b>${drink.strInstructions}</p>
        </div>
      `;

         
            const modal = new bootstrap.Modal(document.getElementById("modal"));
            modal.show();
        });
};

loadAllProduct();