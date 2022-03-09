let binarioDecimal = document.querySelector('#form-bd');
let decimalBinario = document.querySelector('#form-db');
binarioDecimal.addEventListener('submit', (e) => {
    e.preventDefault();
    let numeroBinario = new FormData(binarioDecimal);
    let numBi = numeroBinario.get('txtbinario');
    binarioADecimal(numBi);
});
decimalBinario.addEventListener('submit', (e) => {
    e.preventDefault();
    let numeroDecimal = new FormData(decimalBinario);
    let numDe = numeroDecimal.get('txtdecimal');
    decimalABinario(numDe);
});
function binarioADecimal(num) {
    let muestraResultadoBi = document.querySelector('#resultdecimal');
    let newArray = num.split('').reverse();
    let suma = 0;
    for (let i = 0; i < newArray.length; i++) {
        let operacion = (Math.pow(2, i)) * newArray[i];
        suma += operacion;
    }
    muestraResultadoBi.value = suma;
}
function decimalABinario(num) {
    let muestraResultadoDe = document.querySelector('#resultbinario');
    let array = [];
    let contador = num;
    while (contador != 0) {
        let divi = Math.floor(contador / 2);
        let residuo = contador % 2;
        contador = divi;
        array.unshift(residuo);
    }
    let respuesta = array.join('');
    muestraResultadoDe.value = respuesta;
}