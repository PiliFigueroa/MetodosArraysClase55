
    // Tenemos un array en una variable playlist con una lista de canciones de un disco.
    // Recorrer la lista con la función forEach y mostrarlas una por una utilizando console.log()
    // const playlist = [
    //     "Concrete and Gold",
    //     "The Line",
    //     "Sunday Rain",
    //     "Happy Ever After (Zero Hour)",
    //     "Arrows",
    //     "Dirty Water",
    //     "La Dee Da",
    //     "The Sky Is a Neighborhood",
    //     "Make It Right",
    //     "Run",
    //     "T-Shirt",
    //   ];

     // array.forEach(arr => console.log(arr))

     //playlist.forEach(cancion => console.log(cancion))
     //playlist.forEach((cancion, index) => console.log(`${index+1} - ${cancion}`))

    //  const librosDeJS = [
    //     "JavaScript for Kids: A Playful Introduction to Programming",
    //     "Composing Software",
    //     "Eloquent JavaScript: A Modern Introduction to Programming",
    //     "JavaScript: The Good Parts",
    //     "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
    //     "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    //     "JavaScript: The Definitive Guide",
    //     "You Don’t Know JS",
    //     "JavaScript Allongé: The Six Edition",
    //   ];
      
      /// ¡escribir en este espacio la solución del ejercicio!
      let totalLibros = 0
      //librosDeJS.forEach(libro => totalLibros++)
      
    //   console.log(
    //     "Mi lista de libros de JavaScript tiene " + totalLibros + " libros"
    //   );

    const playlist = [
        "Concrete and Gold",
        "The Line",
        "Sunday Rain",
        "Happy Ever After (Zero Hour)",
        "Arrows",
        "Dirty Water",
        "La Dee Da",
        "The Sky Is a Neighborhood",
        "Make It Right",
        "Run",
        "T-Shirt",
      ];

    //  playlist.forEach((cancion, index) => console.log(`${index+1} - ${cancion}`))

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

// codea debajo de este comentario la solucion al ejercicio
numbers.forEach(num => sum += num)

//console.log(sum);
// deberia mostrar 155

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0
let sumaTotal = 0

// codea debajo de este comentario la solucion al ejercicio
notasDeTPs.forEach(nota => {
    sumaTotal += nota
    notaFinal = sumaTotal / notasDeTPs.length
    return notaFinal
})

//console.log(notaFinal);
// deberia mostrar 6.8

const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

// codear acá la solución del ejercicio

const frasesExclamadas = frases.map(frase => `¡${frase}!`)

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

const librosDeJS = [
    "JavaScript for Kids: A Playful Introduction to Programming",
    "Composing Software",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "JavaScript: The Good Parts",
    "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
    "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "JavaScript: The Definitive Guide",
    "You Don’t Know JS",
    "JavaScript Allongé: The Six Edition",
  ];
  
  // codear acá la solución del ejercicio
  
  // el resultado final debería ser
  // <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

const lista = document.querySelector('#lista')

librosDeJS.map(libro => lista.innerHTML += `<li>${libro}</li>`)

const getId = (id) => document.querySelector(`#${id}`)
const getClass = (clase) => document.querySelector(`.${clase}`)