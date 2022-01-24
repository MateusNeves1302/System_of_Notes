/* 

     ### Transformar notas escolares

    
     Crie um algoritmo que transforme as notas do sistema
     numerico para sistema de notas em caracteres tipo A B e C.

     * de 90 para cima  - A
     * entre 80 a 89 - B
     * entre 70 a 79 - C
     * entre 60 a 69 - D
     * menor que 60 - F
     
*/

// let nota = 99
// let notaA = nota >= 90 && nota <= 100
// let notaB = nota >= 80 && nota <= 89
// let notaC = nota >= 70 && nota <= 79
// let notaD = nota >= 60 && nota <= 69
// let notaF = nota < 60 && nota >= 0

// let notaFinal;

// 1º Forma (+ complexa)

// if(nota >= 90 && nota <= 100) {
//     console.log(nota + ' Aluno tirou nota (A)')
// } else if (nota >= 80 && nota <= 89) {
//     console.log(nota + ' Aluno tirou nota (B)' )
// }else if (nota >= 70 && nota <= 79) {
//     console.log(nota + ' Aluno tirou nota (C)')
// }else if (nota >= 60 && nota <= 69) {
//     console.log(nota + ' Aluno tirou nota (D)')
// }else if (nota < 60 && nota >= 0) {
//     console.log(nota + ' Aluno abaixo da media (F) ')
// }else {
//     notaFinal = "Nota invalida"
// }

// console.log(notaFinal)


// 2º Forma (+ simples)

// if(notaA) {
//     notaFinal = "A"
// } else if (notaB) {
//     notaFinal = "B"
// }else if (notaC) {
//     notaFinal = "C"
// }else if (notaD) {
//     notaFinal = "D"
// }else if (notaF) {
//     notaFinal = "F"
// }else {
//     notaFinal = "Nota invalida"
// }

// console.log(notaFinal)


// 3º Forma (Usando-se Fuction)

function getNota (nota) {

let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaF = nota < 60 && nota >= 0

let notaFinal;

if(notaA) {
    notaFinal = "A"
} else if (notaB) {
    notaFinal = "B"
}else if (notaC) {
    notaFinal = "C"
}else if (notaD) {
    notaFinal = "D"
}else if (notaF) {
    notaFinal = "F"
}else {
    notaFinal = "Nota invalida"
}

return notaFinal

}

console.log(getNota(101))
console.log(getNota(-1))
console.log(getNota(0))
console.log(getNota(1))
console.log(getNota(45))
console.log(getNota(65))
console.log(getNota(75))
console.log(getNota(85))
console.log(getNota(95))


