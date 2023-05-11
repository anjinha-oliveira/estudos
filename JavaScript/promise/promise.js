const soma = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0){
            reject('erro')
        } 
        const resultado = a + b;
        resolve(resultado)
        
    })
}

soma(1, -2).then((resultado) => {
    console.log(resultado)
}).catch((erro) => {
    console.log(erro)
})