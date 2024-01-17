// desafio para criar um código que mostre o nível do herói conforme o valor de seu Xp.

var heroi = "Mago dos Códigos";     //nome do Heroi.
var xp = 2002;    // Altere o valor conforme desejar!

var nivel = {     //define um objeto chamado nivel que mapeia intervalos de pontos de experiência para o nivel correspondente.
    0: "Ferro",               // Nível para xp de 0 a 999.
    1000: "Bronze",           // Nível para xp de 1000 a 2000.
    2001: "Prata",            // Nível para xp de 2001 a 5000.
    5001: "Ouro",             // Nível para xp de 5001 a 7000.
    7001: "Platina",          // Nível para xp de 7001 a 8000.
    8001: "Ascendente",       // Nível para xp de 8001 a 9000.
    9001: "imortal",          // Nível para xp de 9001 a 10000.
    10001: "Radiante"         // Nível para xp igual ou superior a 10001.
};

var nivelHeroi = "Radiante";    //variavel para atribuir um valor padrão com xp igual ou superior a 1001.

    for(var xpLimite in nivel) {    
        if (xp < parseInt(xpLimite, 10)) {   //xpLimite é uma chave no formato string e convertemos para um numero inteiro usando parseInt.
            nivelHeroi = nivel[xpLimite];   //A var nivelHeroi recebe nivel que retorna o valor com xpLimite correspondente ao valor associado.
        break;
    }
}
console.log("O grande poderoso " + heroi, "está no nível " + nivelHeroi,".");