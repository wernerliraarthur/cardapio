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