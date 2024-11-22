class criandoHeroi {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }


    attack(weapon){

        if (this.type === "Guerreiro"){
            weapon = "Espada"
        } else if (this.type === "Mago"){
            weapon = "Magia"
        } else if (this.type === "Monge"){
            weapon = "Artes Marciais"
        } else if(this.type === "Ninja"){
            weapon = "Shuriken"
        }

        console.log(`O ${this.type} atacou usando ${weapon}`)
    } 
}

let novoPersonagem = new criandoHeroi ("Felipe", "38", "Monge")

novoPersonagem.attack()