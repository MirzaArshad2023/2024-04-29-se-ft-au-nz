let jsonData = {};

let categoriesArray = [];

async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  jsonData = await response.json();
}

async function handleData() {
  await fetchData();
  const categories = new Set();
  for (const product of jsonData) {
    categories.add(product.category);
  }
  categoriesArray = Array.from(categories);
}

async function addDropdown() {
  await handleData();
  const categoryTemplate = document
    .getElementById("categoryTemplate")
    .content.cloneNode(true);
  const categoryElements = categoryTemplate.querySelectorAll(".category");
  categoriesArray.forEach((category, index) => {
    if (index < categoryElements.length) {
      categoryElements[index].innerText = category;
    }
  });

  document.querySelector("#insertCategory").appendChild(categoryTemplate);
}

async function addCard() {
  await handleData();
  jsonData.forEach((data) => {
    const cardTemplate = document
      .getElementById("cardTemplate")
      .content.cloneNode(true);

    cardTemplate.querySelector(".card-img-top").src = data.image;
    cardTemplate.querySelector(".card-title").innerText = data.title;
    cardTemplate.querySelector(".card-subtitle").innerText = data.category;
    cardTemplate.querySelector(".card-text").innerText =
      data.description.substring(0, 50);
    cardTemplate.querySelector(
      ".text-body-secondary"
    ).innerText = `$${data.price}`;
    cardTemplate.querySelector(
      ".text-body-rating"
    ).innerText = `${data.rating.rate}/5`;

    document.querySelector("#insertTemplate").appendChild(cardTemplate);
  });
}

addDropdown();

addCard();
