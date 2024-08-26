function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior: "smooth"});
}

document.querySelector("#inicio").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#topo");

console.log("Foi para o topo");
});

document.querySelector("#habilidades").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#habilidades1");

console.log("Foi para o topo");
});

document.querySelector("#sobre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#sobre1");

console.log("Foi para o sobre mim");
});

document.querySelector("#projetos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#portifolio");

console.log("Foi para os projetos");
});

document.querySelector("#contato").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#formulario");

console.log("Foi para os projetos");
});

document.querySelector("#contato2").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#formulario");

console.log("Foi para os projetos");
});