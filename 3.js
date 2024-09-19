let time = {
    nome: prompt("Digite o Nome do time"),
    cor: prompt("Digite a Cor do time"),
    turma: prompt("Digite a Turma do time"),
    mascote: prompt("Digite @ Mascote do time"),
};

console.log(`Bem Vindo ${time.nome} da ${time.turma}`);
alert(`Bem Vindo ${time.nome} da ${time.turma}`);

console.log(`Sobre o time\nNome: ${time.nome}\nCor: ${time.cor}\nTurma: ${time.turma}\nMascote: ${time.mascote}`);
alert(`Sobre o time\nNome: ${time.nome}\nCor: ${time.cor}\nTurma: ${time.turma}\nMascote: ${time.mascote}`);

time.grito = prompt("Escreva o grito de guerra do time")

console.log(time.grito.toUpperCase())
console.log(time.grito.toLowerCase())
alert(time.grito.toUpperCase())
alert(time.grito.toLowerCase())