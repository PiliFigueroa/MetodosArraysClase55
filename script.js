const puntajes = [150, 400, 1100, 500, 350, 225, 100, 780]

// Filter => me filtra los resultados segun mi condicion y me devuelve
// los mismos si la condicion da true, si da false sigue con el siguiente
const mayoresAQuinientos = puntajes.filter(puntaje => puntaje >= 500)
//console.log(mayoresAQuinientos)

// Map => itera por cada elemento del array y aplica un cambio al mismo
const puntajeBonus = puntajes.map(puntaje => {
    if (puntaje > 400) {
        return puntaje + 200
    } else {
        return puntaje
    }
})
const puntajeBonus2 = puntajes.map(puntaje => puntaje > 400 ? puntaje + 200 : puntaje)
// console.log(puntajeBonus2)

const edades = [21, 27, 38, 22, 40, 17, 56, 60]

// Every => devuelve true/false segun si TODOS los elementos del 
// array cumplen con la condicion dada

const esMayor = edades.every(edad => edad >= 18)
// console.log(esMayor)

// Find => encuentra la primer coincidencia con mi condicion y devuelve la misma
const mayorA30 = edades.find(edad => edad > 30)
// console.log(mayorA30)

const frutas = ["🍋", "🍒", "🍑", "🍑", "🍋", "🍒", "🍒", "🍋","🍑"]
const frutas2 = ["🍋", "🍒", "🍋", "🍒", "🍒", "🍋"]

// Some => devuelve true/false si al menos UN elemento cumple con la condicion dada
// const hayCereza = frutas.some(fruta => fruta === "🍒")
// console.log(hayCereza)

const consultarStock = (array, fruta) => {
    const hayFruta = array.some(element => element === fruta)
    if (hayFruta) {
        console.log(`Hay stock de ${fruta}`)
    } else {
        console.log(`No hay stock de ${fruta}`)
    }
}

// consultarStock(frutas, "🍒")
// consultarStock(frutas2, "🍑")

frutas2.forEach(element => consultarStock(frutas2, element))