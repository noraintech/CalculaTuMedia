

//Capturamos el boton y le agregamos un evento.
let botonCalcularMedia = document.getElementById("botonResultado")
botonCalcularMedia.addEventListener("click", calcularMedia);
function calcularMedia () {
    let alumno1 = document.getElementById("alumno1");
    console.log(alumno1.value)
    let nota1 = alumno1.value;

    let alumno2 = document.getElementById("alumno2");
    let nota2 = alumno2.value;
    

    let alumno3 = document.getElementById("alumno3");
    console.log(alumno3.value)
    let nota3 = alumno3.value;

    let alumno4 = document.getElementById("alumno4");
    let nota4 = alumno4.value;

    let media = sacarMedia(nota1, nota2, nota3, nota4)
    console.log(media);

    let resultado = document.getElementById("resultado");
    console.log(resultado.innerHTML = media);

}


function sacarMedia (nota1, nota2, nota3, nota4) {
    let sumaNotas = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    
    let division = sumaNotas / 4;
    return division.toFixed(2);

    
}


 