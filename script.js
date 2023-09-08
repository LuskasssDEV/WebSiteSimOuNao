function sim() {
    alert("Agora estamos casado, luazinha <3");
    location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ&ab_channel=georgemichaelVEVO";
}

function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opaaaaaa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}   