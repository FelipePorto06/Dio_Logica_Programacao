function getFirtName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

let userName = getFirtName("Felipe de Sousa Porto")

console.log("Seja bem vindo " + userName)