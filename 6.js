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
time.atletas = [];

for (let i = 1; i<=5; i++){
    time.atletas[i-1] = prompt("Adicione o nome do "+i+"º Atleta");
};

time.atletas[5] = prompt("Adicione mais um atleta");

console.log(time.atletas);

for(let i = 0; i!=1; i=i){
time.esporte = prompt("Escolha um esporte dentre essa lista:\n{ Xadrez | Vôlei | Basquete | Futebol | FIFA }")

    switch (time.esporte.toLowerCase()){
        case "futebol":
            alert("Você escolheu um jogo de chutar a bola. Conhecido como Futebol!");
            console.log("Você escolheu um jogo de chutar a bola. Conhecido como Futebol!");
            i = 1;
        break;
        case "fifa":
            alert("Você escolheu um jogo de chutar a bola. Conhecido como Fifa!");
            console.log("Você escolheu um jogo de chutar a bola. Conhecido como Fifa!");
            i = 1;
        break;
        case "volei":
            alert("Jogo escolhido: Vôlei!");
            console.log("Jogo escolhido: Vôlei!");
            i = 1;
        break;
        case "basquete":
            alert("Jogo escolhido: Basquete!");
            console.log("Jogo escolhido: Basquete!");
            i = 1;
        break;
        case "xadrez":
            alert("Jogo escolhido: Xadrez!");
            console.log("Jogo escolhido: Xadrez!");
            i = 1;
        break;
        default:
            alert("Jogo invalido! Tente novamente mais tarde.")
            console.log("Jogo invalido! Tente novamente mais tarde.")
        break;
    }
}

console.log("Os atletas do time "+time.nome+" são:")
for(let i=0; i<6; i++){
    console.log((i+1)+". "+time.atletas[0])
}
//Tentei usar o '.lenght()' no 'i < time.atletas.length()', mas não funcionou