const adicao = (a,b) => {
    return `Adição: ${a} + ${b} = ${(a+b)}`
};
const subtracao = (a,b) => {
    return `Subtração: ${a} - ${b} = ${(a-b)}`
};
const multiplicacao = (a,b) => {
    return `Multiplicação: ${a} * ${b} = ${(a*b)}`
};
const divisao = (a,b) => {
    return `Divisão: ${a} / ${b} = ${(a/b)}`
};

module.exports = {
    divisao,
    adicao,
    subtracao,
    multiplicacao
}