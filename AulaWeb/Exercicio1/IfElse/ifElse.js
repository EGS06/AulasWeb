function calcularMedia() {
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let inNome = document.getElementById("inNome");
    let outMedia = document.getElementById("outMedia");
    let outSituacao = document.getElementById("outSituacao");

    const nome = inNome.value;
    const nota1 = Number(inNota1.value);
    const nota2 = Number(inNota2.value);

    let media = (nota1 + nota2) / 2;

    outMedia.textContent = "Media das Notas :" + media;

    if (media >= 7) {
        outSituacao.textContent = nome + "Situação: Aprovado";
        outSituacao.style.color = "blue"
    }
    else if (media >= 4) {
        outSituacao.textContent = nome + "Situação: Em Exame";
        outSituacao.style.color = "green"
    }
    else {
        outSituacao.textContent = nome + "Situação: Reprovado";
        outSituacao.style.color = "red"
    }

}

document.getElementById("btResultado").addEventListener("click", calcularMedia);