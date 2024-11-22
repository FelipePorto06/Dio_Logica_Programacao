let invoice = {

    name: "Felipe",
    age: 28,
    products: {
        0: ["mouse 2kwm", 29.90],
        1: ["teclado mecanico", 129.99],
        2: ["monitor", 899.90]
    },
    taxes: "98.90"  
}


generateInvoice(invoice)



function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
        console.log("----------------")
    

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}
