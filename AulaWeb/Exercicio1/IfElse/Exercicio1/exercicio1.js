function mudarTexto() {
    document.getElementById("message").innerText = "Olá " + document.getElementById("nome").value;
}

function mudarEstilo() {
    const p = document.getElementById("message");
    p.style.color = "blue";
    p.style.fontSize = "32px";
}