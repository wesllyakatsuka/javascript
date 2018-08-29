  //Comentários de linha
    
  /*comentários
    de bloco*/
   
//Saída no console. Utilize tecla F12 no Chrome e clique na aba "Console"
console.log("Olá, Mundo 1!");

//variáveis
var a = "Olá Mundo 2!!!";
console.log(a);


//O comando ler declara variáveis definindo o escopo de atualização
//const é usado para declarar variáveis com valor que não irá alterar durante a execução do programa
// Operador de atribuição
// == é comparação. Mas, não funciona corretamente porque só copara o conteúdo
let x = 10;
const y = "10";
console.log(x == y);

// === Compara conteúdo das variáveis e também o tipo de dados que elas possuem
let x1 = 10;
const y1 = "10";
console.log(x1 === y1);

//Estrutura de controle "if"
var cor = "roxo";
if (cor == "verde") {
    console.log("Siga!");   
} else if (cor == "amarelo") {
    console.log("Atenção!");
} else if (cor == "vermelho") {
    console.log("Pare!");
} else {
    console.log("Consulte a CET");
}


//Estrutura de controle "switch"
var cor = "vermelho"
switch (cor) {
    case "verde":
        console.log("Siga!"); 
        break;
    case "amarelo":
        console.log("Atenção!");
        break;
    case "vermelho":
        console.log("Pare!");
        break;      
    default:
        console.log("Consulte a CET");
}


//Loop "For"
var tabuada = 5;
for (i = 0; i <= 10; i++) {
    console.log(tabuada + " x " + i + " = " + tabuada * i);   
}

//Loop For - Moderno. Utiliza Template String ${js}``
let n = 9;
for (let i = 0; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);  
}
