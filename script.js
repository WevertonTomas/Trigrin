const simbolos = ["🍒", "⭐", "🍋", "🔔", "🐯", "💎", "🍉"];

const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");
const resultado = document.getElementById("resultado");
const girarBtn = document.getElementById("girarBtn");

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
                resultado.textContent = "🎉 Parabéns, você é o campeão! 🎉";
            } else {
                resultado.textContent = "😢Não foi dessa vez, tente novamente!😢";
            }
        }
    }, 100);
}

girarBtn.addEventListener("click", girarRoletas);
