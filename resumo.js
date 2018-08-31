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

//Functions
function soma(s1, s2) {
    return s1 + s2;
}
let resultado = soma(1, 2);
console.log(resultado);


//Functions - Construindo uma calculadora simples
function calculadora(s1, s2, sinal) {
    return eval (`${s1} ${sinal} ${s2}`);
}
let somando = calculadora(1, 2, "+");
console.log(somando);


//Arrow Functions com Eventos de captura
//Contabiliza todos os cliques com o mouse nas extremidades do navegador
window.addEventListener('focus', event => {
    console.log('focus');
});

//Contabiliza todos os cliques com o mouse na área do site tipo <body>
document.addEventListener('click', event => {
    console.log('click');
});



//Trabalhando com datas
//Olha que bizarro
Date.now();
console.log(Date.now()); // A sáida em 30/08/2018 foi a seguinte: "1535627236946". Isso porque é calculado Quantidade de segundos desde 01/01/1970. hahahahaha

//Formatando um pouco, já melhora e fica completo!
let agora = new Date(1000);
console.log(agora);

//Mas, se você quiser o dia, o mês ou somente o ano utilizando ".getDate()" ou "getMonth()" ou "getFullYear()" respectivamente.
let agora2 = new Date();
console.log(agora2.getFullYear());

//Tem como usar algo mais elaborado
let agora3 = new Date();
console.log(agora3.toLocaleDateString("pt-BR"));


//
let carros = ["palio 98", "Toro", "Uno", 10, true, new Date(), function(){}];
