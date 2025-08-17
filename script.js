const simbolos = ["🍒", "⭐", "🍋", "🔔", "🐯", "💎", "🍉"];

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const resultado = document.getElementById("resultado");
const girarBtn = document.getElementById("girarBtn");
const acertosElem = document.getElementById("acertos");
const errosElem = document.getElementById("erros");
const percentualElem = document.getElementById("percentual");

let acertos = 0;
let erros = 0;

function girarRoletas() {
    let giro = 0;
    resultado.textContent = "";

    const intervalo = setInterval(() => {
        const s1 = simbolos[Math.floor(Math.random() * simbolos.length)];
        const s2 = simbolos[Math.floor(Math.random() * simbolos.length)];
        const s3 = simbolos[Math.floor(Math.random() * simbolos.length)];

        r1.textContent = s1;
        r2.textContent = s2;
        r3.textContent = s3;

        giro++;
        if (giro > 15) {
            clearInterval(intervalo);

            if (s1 === s2 && s2 === s3) {
                resultado.textContent = "🎉Parabéns, você é o campeão!🎉";
                acertos++;
            } else {
                resultado.textContent = "😢Não foi dessa vez, tente novamente!😢";
                erros++;
            }

            acertosElem.textContent = `Acertos: ${acertos}`;
            errosElem.textContent = `Erros: ${erros}`;

            const total = acertos + erros;
            const porcentagem = ((acertos / total) * 100).toFixed(1);
            percentualElem.textContent = `Percentual de acertos: ${porcentagem}%`;
        }
    }, 100);
}

girarBtn.addEventListener("click", girarRoletas);
