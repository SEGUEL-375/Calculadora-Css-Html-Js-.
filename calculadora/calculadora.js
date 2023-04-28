const numeroButton = document.getElementsByName('numero');
const operacionButton = document.getElementsByName('operacion');
const igualButton = document.getElementsByName('igual')[0];
const borrarButton = document.getElementsByName('borrar')[0];

var resultado = document.getElementById('resultado');
var operationActual = '';
var operationAnterior = '';
var operation = undefined;


////forEach:para recorrer un arreglo 
numeroButton.forEach(function(button) {
    button.addEventListener('click', function() {
        addNumber(button.innerText)
    })
});

operacionButton.forEach(function(button) {
    button.addEventListener('click', function() {
        selectOperation(button.innerText);
    })
});

igualButton.addEventListener('click', function() {
    calcular();
    updateDisplay();
});

borrarButton.addEventListener('click', function() {
    clear();
    updateDisplay();
})

function selectOperation(op) {
    if (operationActual === '') return;
    if (operationAnterior !== '') {
        calcular();
    }
    operation = op.toString();
    operationAnterior = operationActual;
    operationActual = '';
}

//parseFloat:funcion creada para parsear un string y devolver un número si es posible(en este caso si.)
/// break: salir.
//toString: es un método integrado del objeto Number de JavaScript que le permite convertir cualquier valor de tipo numérico en su representación de tipo cadena.
//isNaN: intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve falsedad.
// switch: ():expresión será normalmente una variable cuyo contenido queremos evaluar: en este caso se evalua una operacion.
function calcular() {
    var calculo;
    const anterior = parseFloat(operationAnterior);
    const actual = parseFloat(operationActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operation) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "x":
            calculo = anterior * actual;
            break;
        case "÷":
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operationActual = calculo;
    operation = undefined;
    operationAnterior = '';
}

function addNumber(num) {
    operationActual = operationActual.toString() + num.toString();
    updateDisplay();
}

function clear() {
    operationActual = '';
    operationAnterior = '';
    operation = undefined;
}

function updateDisplay() {
    resultado.value = operationActual;
}
resultado.value = operationActual;