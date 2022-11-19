# homepage by MIkołaj

## demo
https://scudoo.github.io/homepage/

## description
Because **I don't really** like talking about myself, I decided to create a homepage about Warsaw. At least for now. 

**Take a look at the homepages's JS**

```
const welcome = () => {
    console.log("Witaj przybyszu");
}

const changeHeaderToRed = () => {
    headerElement.classList.add("header__header--red");
    headerElement.classList.remove("header__header--green");
    headerElement.classList.remove("header__header--blue");
}

const changeHeaderToGreen = () => {
    headerElement.classList.add("header__header--green");
    headerElement.classList.remove("header__header--red");
    headerElement.classList.remove("header__header--blue");
}
const changeHeaderToBlue = () => {
    headerElement.classList.add("header__header--blue");
    headerElement.classList.remove("header__header--red");
    headerElement.classList.remove("header__header--green");
}

const toggleBackgroundTheme = () => {
    const body = document.body;
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    const article = document.querySelector(".article");
    const table = document.querySelector(".js-sectionTable");
    const linkMetro = document.querySelector(".js-linkMetro");
    const linkOsiedle = document.querySelector(".js-linkOsiedle");
    const linkSchrony = document.querySelector(".js-linkSchrony");
    const linkPustka = document.querySelector(".js-linkPustka");
    const sourceLink = document.querySelector(".js-sourceLink");

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
}

const buttonRed = document.querySelector(".js-headerButtonRed");
buttonRed.addEventListener("click", changeHeaderToRed);

const buttonGreen = document.querySelector(".js-headerButtonGreen");
buttonGreen.addEventListener("click", changeHeaderToGreen);

const buttonBlue = document.querySelector(".js-headerButtonBlue");
buttonBlue.addEventListener("click", changeHeaderToBlue);

const button = document.querySelector(".js-articleButton");
button.addEventListener("click", toggleBackgroundTheme);

const headerElement = document.querySelector(".js-header");

welcome();
```