let vogais = ['a','e', 'i', 'o', 'u'];
let consoantes = [ 'b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
let texto = " a anna clara fiochi";
texto = texto.toLowerCase();
let arrayLetras = texto.split('');
let arrayVogais = [];
let arrayConsoantes = [];
let Espacos = 0;


for(let i = 0; i< arrayLetras.length; i++){
    if(vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    } 
    
    if(consoantes.includes(arrayLetras[i])){
        arrayConsoantes.push(arrayLetras[i]);
    } else {
        Espacos++
    }

}
console.log("texto original:", texto);
console.log("vogais encontradas:", arrayVogais.toString());
console.log("total de vogais:" + arrayVogais.length);
console.log("consoantes encontradas:", arrayConsoantes.toString());
console.log("total de consoantes:" + arrayConsoantes.length);
console.log("total de espaços:" + Espacos);
