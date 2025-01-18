// Importacion antigua
//Se importa deconstrullendo
/* const { obtenertitulo, obtenerdocente} = require('./funciones') 
const {boot} = require('./objetos')

const fun = require('./funciones')
const obt = require('./objetos')

console.log(fun.obtenertitulo())
console.log(fun.obtenerdocente('Jhonathan','Devrier'))
console.log(obt) */

//Importacion actual
import { obtenertitulo,obtenerdocente } from "./funciones.js"
import { boot } from "./objetos.js"

console.log(obtenertitulo())
console.log(obtenerdocente('Jhonathan','Devrier'))

console.log("El curso es "+ boot.cursoboot)
console.log("La Dificultad del Curso es "+ boot.dificultad)
console.log("El nivel del curso es "+ boot.nivel)