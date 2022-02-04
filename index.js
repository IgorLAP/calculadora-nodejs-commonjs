const inquirer = require('inquirer');
const { divisao, multiplicacao, adicao, subtracao} = require('./operacoes');

inquirer.prompt([
    {
        name: 'n1',
        message: 'Primeiro número',
        type: 'number'
    },
    {
        name: 'n2',
        message: 'Segundo número',
        type: 'number'
    },
    {
        name: 'operacao',
        message: 'Qual operação deseja realizar?',
        type: 'list',
        choices: ['Adição', 'Subtração', 'Divisão', 'Multiplicação']
    }
]).then((ans)=>{

    let n1 = ans.n1;
    let n2 = ans.n2;
    
    if(isNaN(n1) || isNaN(n2)){
        throw new Error('Valores informados devem ser números');
    }

    switch(ans.operacao){
        case 'Adição':
            return console.log(adicao(n1,n2));
            break;
        case 'Subtração':
            return console.log(subtracao(n1, n2));
        case 'Divisão':
            return console.log(divisao(n1,n2));
        case 'Multiplicação':
            return console.log(multiplicacao(n1,n2));
        default:
            break;
    }
}).catch(err=>{
    console.log(err)
})

