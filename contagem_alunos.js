const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const qtdalunos = 6

rl.question('Qual a quantidade de alunos? ', (qtdalunos) => {
    console.log(`A quantidae de alunos é:  ${qtdalunos}`);
    rl.close(); 
    
    for(let x = 0; x <= qtdalunos; x++){
    
        if(x == 0){
            console.log(x + ": Zero")
        }
            if (x%2 == 0){
                console.log(x + ": Par")
            }
            if (x%2 != 0){
                console.log(x + ": Ímpar")
            }
        }
})