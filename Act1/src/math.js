const calculadora = (operacion, num1, num2) =>

{ 
    switch(operacion) { 
        case 'sumar': 
        return num1 + num2; 
        case 'restar': 
        return num1 - num2; 
        case 'multiplicar': 
        return num1 * num2; 
        case 'dividir': 
        if (num2 !== 0) { 
            return num1 / num2; 
        } else { 
            return 'Error: División por cero'; } 
default: return 'Operación no válida'; } }

module.exports = {
    calculadora
}