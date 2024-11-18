function playerRank(vitorias, derrotas){
    let rank = vitorias - derrotas
    return rank
}

let nivel = playerRank(10, 5)

function partidasRankeadas(){
    if(playerRank > 10){
        playerRank = "Ferro"
    }
    if(nivel > 9 && nivel <= 20){
        nivel = "Bronze"
    }
    if(nivel > 20 && nivel <= 50){
        nivel = "Prata"
    }
    if(nivel > 50 && nivel <= 80){
        nivel = "Ouro"
    }
    if(nivel > 80 && nivel <= 90){
        nivel = "Diamante"
    }
    if(nivel > 90 && nivel <= 100){
        nivel = "Lendário"
    }
    if(nivel > 100){
        nivel = "Imortal"
    }
    return nivel
}

console.log(nivel)


