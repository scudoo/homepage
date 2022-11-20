{
    const welcome = () => {
        console.log("Witaj przybyszu");
    }

    const buttonRed = document.querySelector(".js-headerButtonRed");
    const buttonGreen = document.querySelector(".js-headerButtonGreen");
    const buttonBlue = document.querySelector(".js-headerButtonBlue");

    const headerColor = (color) => {
        const headerElement = document.querySelector(".js-header");
        headerElement.style.color = color;
    };

    buttonRed.addEventListener("click", () => {
        headerColor("red")
    });
    buttonGreen.addEventListener("click", () => {
        headerColor("green");
    });
    buttonBlue.addEventListener("click", () => {
        headerColor("blue");
    });



    const toggleBackgroundTheme = () => {
        const body = document.body;
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
    };

    const button = document.querySelector(".js-articleButton");
    button.addEventListener("click", toggleBackgroundTheme);

    welcome();

    const header = document.querySelector(".header");
}