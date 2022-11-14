console.log("Witaj przybyszu");

let button = document.querySelector(".js-articleButton");
let headerElement = document.querySelector(".js-header");
let body = document.querySelector("body");
let header = document.querySelector(".header");
let nav = document.querySelector(".nav");
let article = document.querySelector(".article");
let czerwony = document.querySelector(".js-headerButtonRed");
let zielony = document.querySelector(".js-headerButtonGreen");
let niebieski = document.querySelector(".js-headerButtonBlue");
let table = document.querySelector(".js-sectionTable");

let linkMetro = document.querySelector(".js-linkMetro");
let linkOsiedle = document.querySelector(".js-linkOsiedle");
let linkSchrony = document.querySelector(".js-linkSchrony");
let linkPustka = document.querySelector(".js-linkPustka");
let sourceLink = document.querySelector(".js-sourceLink");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    header.classList.toggle("header--dark");
    nav.classList.toggle("nav--dark");
    article.classList.toggle("article--dark");
    table.classList.toggle("table--dark");

    linkMetro.classList.toggle("linkMetro--dark");
    linkOsiedle.classList.toggle("linkOsiedle--dark");
    linkSchrony.classList.toggle("linkSchrony--dark");
    linkPustka.classList.toggle("linkPustka--dark");
    sourceLink.classList.toggle("sourceLink--dark");

    button.innerText = body.classList.contains("body--dark") ? "Jasny motyw" : "Ciemny motyw";
});

czerwony.addEventListener("click", () => {
    headerElement.classList.add("header__header--red");
    headerElement.classList.remove("header__header--green");
    headerElement.classList.remove("header__header--blue");
});

zielony.addEventListener("click", () => {
    headerElement.classList.add("header__header--green");
    headerElement.classList.remove("header__header--red");
    headerElement.classList.remove("header__header--blue");
});

niebieski.addEventListener("click", () => {
    headerElement.classList.add("header__header--blue");
    headerElement.classList.remove("header__header--red");
    headerElement.classList.remove("header__header--green");
});