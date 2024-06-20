"use strict";

//INTERACTIVITY WITH THE HEADER SECTION

//Assigning ClassNames to the Elements of the first row of the dropdown menu

const presentationTitle = document.querySelector(
  ".presentation-title-container"
);
const presentationDescription = document.querySelector(
  ".presentation-description"
);
const shopButtonContainer = document.querySelector(".shop-button-container");

// presentationTitle.classList.remove("animation-title");
// presentationDescription.classList.remove("animation-description");
// shopButtonContainer.classList.remove("animation-button");

const groupOfPlants = document.querySelectorAll(".first-row span");

groupOfPlants.forEach((groupOfPlant) =>
  groupOfPlant.classList.add("set-of-plant")
);

let nameOfPlants = document.querySelectorAll(".set-of-plant div");

//Validating that not add this className to the elementes of the plant Category

for (let i = 0; i < nameOfPlants.length; i++) {
  if (i !== 0 && i !== 9 && i !== 18 && i !== 27 && i !== 36) {
    nameOfPlants[i].classList.add("name-of-plant");
  }
}

const dropDownMenu = document.querySelector(".dropdown-menu");
const dropDownContent = document.querySelector(".dropdown-content");
const tabs = document.querySelectorAll(".tab-hover");

dropDownMenu.style.transition = "visibility 0.5s";
dropDownContent.style.transition = "max-height 0.5s, opacity 0.5s";

const showDropDown = function () {
  dropDownMenu.classList.remove("hidden");
  dropDownMenu.classList.add("un-shrink");
  dropDownMenu.classList.remove("shrink");
};

tabs.forEach((tab) => tab.addEventListener("mouseover", showDropDown));

const hideDropDown = function () {
  dropDownMenu.classList.add("hidden");
  dropDownMenu.classList.add("shrink");
  dropDownMenu.classList.remove("un-shrink");
};

tabs.forEach((tab) => tab.addEventListener("mouseout", hideDropDown));

dropDownMenu.addEventListener("mouseover", function () {
  dropDownMenu.classList.remove("hidden");
  dropDownMenu.classList.add("un-shrink");
  dropDownMenu.classList.remove("shrink");
});

dropDownMenu.addEventListener("mouseout", function () {
  dropDownMenu.classList.add("hidden");
  dropDownMenu.classList.add("shrink");
  dropDownMenu.classList.remove("un-shrink");
});

const tabPages = document.querySelector("#tab-pages");
const tabBlog = document.querySelector("#tab-blog");
const dropDownPages = document.querySelector(".dropdown-pages");
const dropDownBlog = document.querySelector(".dropdown-blog");

const shortDropDownPages = document.querySelector(".short-dropdown-pages");
const shortDropDownBlog = document.querySelector(".short-dropdown-blog");

tabPages.addEventListener("mouseover", function () {
  shortDropDownPages.classList.add("un-shrink");
  shortDropDownPages.classList.remove("shrink");

  shortDropDownPages.classList.remove("hidden");
});

tabPages.addEventListener("mouseout", function () {
  shortDropDownPages.classList.add("shrink");
  shortDropDownPages.classList.remove("un-shrink");
  shortDropDownPages.classList.add("hidden");
});

tabBlog.addEventListener("mouseover", function () {
  shortDropDownBlog.classList.add("un-shrink");
  shortDropDownBlog.classList.remove("shrink");
  shortDropDownBlog.classList.remove("hidden");
});

tabBlog.addEventListener("mouseout", function () {
  shortDropDownBlog.classList.add("shrink");
  shortDropDownBlog.classList.remove("un-shrink");
  shortDropDownBlog.classList.add("hidden");
});

const shopButton = document.querySelector(".shop-button");

shopButtonContainer.addEventListener("mouseout", function () {
  shopButton.classList.add("shop-button-mouseout");
});

const navigationNumbers = document.querySelectorAll(".navigation-number");
const slides = document.querySelectorAll(".slide");
const firstNavigation = document.querySelector(".first-navigation");
const secondNavigation = document.querySelector(".second-navigation");
const thirdNavigation = document.querySelector(".third-navigation");

slides[0].style.transform = "translateX(0)";
firstNavigation.style.color = "#4eca66";
slides[1].style.transform = "translateX(-100%)";
slides[2].style.transform = "translateX(-100%)";

//INTERACTIVITY WITH THE HOME SECTION

const swipeSlide = function (e) {
  if (e.target.className === "first-navigation navigation-number") {
    slides[0].style.transform = "translateX(0)";
    firstNavigation.style.color = "#4eca66";

    slides[1].style.transform = "translateX(-100%)";
    secondNavigation.style.color = "rgb(148, 236, 148)";

    slides[2].style.transform = "translateX(-100%)";
    thirdNavigation.style.color = "rgb(148, 236, 148)";
  } else if (e.target.className === "second-navigation navigation-number") {
    slides[0].style.transform = "translateX(-100%)";
    firstNavigation.style.color = "rgb(148, 236, 148)";

    slides[1].style.transform = "translateX(0)";
    secondNavigation.style.color = "#4eca66";

    slides[2].style.transform = "translateX(-100%)";
    thirdNavigation.style.color = "rgb(148, 236, 148)";
  } else if (e.target.className === "third-navigation navigation-number") {
    slides[0].style.transform = "translateX(-100%)";
    firstNavigation.style.color = "rgb(148, 236, 148)";

    slides[1].style.transform = "translateX(-100%)";
    secondNavigation.style.color = "rgb(148, 236, 148)";

    slides[2].style.transform = "translateX(0)";
    thirdNavigation.style.color = "#4eca66";
  }
};

firstNavigation.addEventListener("click", swipeSlide);
secondNavigation.addEventListener("click", swipeSlide);
thirdNavigation.addEventListener("click", swipeSlide);

// INTERACTIVITY WITH THE PRODUCTS ON SALE

const favoritesIcon = document.querySelectorAll(".favorite-container");
const cartsIcon = document.querySelectorAll(".cart-container");
const searchesIcon = document.querySelectorAll(".search-container");
const actionsProductIcon = document.querySelectorAll(".action-product");
const productsOverview = document.querySelectorAll(".product");

for (let i = 0; i < productsOverview.length; i++) {
  productsOverview[i].addEventListener("mouseout", function () {
    favoritesIcon[i].style.transitionDelay = "0.1s";
    cartsIcon[i].style.transitionDelay = "0.1s";
    searchesIcon[i].style.transitionDelay = "0.1s";
  });

  productsOverview[i].addEventListener("mouseover", function () {
    favoritesIcon[i].style.transitionDelay = "0.1s";
    cartsIcon[i].style.transitionDelay = "0.2s";
    searchesIcon[i].style.transitionDelay = "0.3s";
  });
}


const shoppingBasket = document.querySelector(".shopping-basket-icon");
const quantityItems = document.querySelector(".quantity-items");

let i = quantityItems.textContent;

shoppingBasket.addEventListener("click", function () {
  quantityItems.textContent = i++;
});
