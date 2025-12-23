// solicitar datos de entrada 

let cantidad = parseInt(prompt("¿Cuántas palabras deseas ingresar?"));


// almacenar palabras  una  lista 

let lista = [];
for (let i = 0; i < cantidad; i++){
    let contador=i+1;
    let palabras= prompt("ingresar palabra N° " + contador);
    lista.push(palabras);
}

// une todas las palabras para contar las vocales totales

const contarVocales =  (palabras) => {
    const vocales = "aáeáiíoóuú";
     let total = 0 ;

     palabras = palabras.toLowerCase();

     for(let letra of palabras) {
        if (vocales.includes(letra)) {
            total++;
        }
     }

    return total;

}

// unir todas las palabras 
let textoUnido = lista.join("");

// total vocales 

let totalVocales = contarVocales(textoUnido); 

// resultado: consola 
console.log(" ~ Total de vocales:  " + totalVocales);

window.alert(" ¡listo! 🤓☝️ La cantidad total de vocales es : " + totalVocales);

//  mostrar resultado en la pagina: 

document.getElementById("resultado").innerHTML =
    "🪄✨ Analisis realizado:  <br>" + 

"<br> ✧ Vocales totales:  " + totalVocales +

"<br> ✧ palabras ingresadas: " + lista.join(" , ") +

"<br> ✧ cantidad de palabras: " + lista.length ; 






