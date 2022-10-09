function normal() {
    var root = document.querySelector(":root");
    var root = document.querySelector(":root");
    root.style.setProperty('--cor-do-fundo-red', 'red');
    root.style.setProperty('--cor-do-fundo-cinza', '#c5c5c5');
    root.style.setProperty('--cor-do-fundo-branco', 'white');
    root.style.setProperty('--cor-do-texto-preto', 'black');
    root.style.setProperty('--cor-do-texto-branco', 'white');
}

function preto() {
    var root = document.querySelector(":root");
    root.style.setProperty('--cor-do-fundo-red', 'black');
    root.style.setProperty('--cor-do-fundo-cinza', 'black');
    root.style.setProperty('--cor-do-fundo-branco', 'black');
    root.style.setProperty('--cor-do-texto-preto', 'white');
    root.style.setProperty('--cor-do-texto-branco', 'white');
}

function branco() {
    var root = document.querySelector(":root");
    root.style.setProperty('--cor-do-fundo-red', 'white');
    root.style.setProperty('--cor-do-fundo-cinza', 'white');
    root.style.setProperty('--cor-do-fundo-branco', 'white');
    root.style.setProperty('--cor-do-texto-preto', 'black');
    root.style.setProperty('--cor-do-texto-branco', 'black');
}

function azul() {
    var root = document.querySelector(":root");
    root.style.setProperty('--cor-do-fundo-red', '#000066');
    root.style.setProperty('--cor-do-fundo-cinza', '#000066');
    root.style.setProperty('--cor-do-fundo-branco', '#000066');
    root.style.setProperty('--cor-do-texto-preto', 'white');
    root.style.setProperty('--cor-do-texto-branco', 'white');
}

function meio() {
    window.scrollTo(0, 120);
}

function fim() {
    window.scrollTo(0, 1000);
}