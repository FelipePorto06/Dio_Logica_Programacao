function playerRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

function partidasRankeadas(vitorias, derrotas) {
    let saldo = playerRank(vitorias, derrotas);
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias > 100) {
        nivel = "Imortal";
    }
    return { saldo, nivel };
}

let resultado = partidasRankeadas(55, 20);
console.log(`O Herói tem um saldo de ${resultado.saldo} e está no nível ${resultado.nivel}.`);
