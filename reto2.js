const estudiantes = [
    { id: 1, nombre: 'Ana', edad: 20 },
    { id: 2, nombre: 'Juan', edad: 22 },
    { id: 3, nombre: 'María', edad: 21 },
];

//Función que busca un estudiante por ID y retorna una Promesa
function buscarEstudiantePorId(id) {
    return new Promise((resolve, reject) => {
        const estudiante = estudiantes.find(e => e.id === id);

        if (estudiante) {
            resolve(estudiante);
        } else {
            reject(`No existe un estudiante con el ID ${id}.`);
        }
    });
}

//Función para mostrar el resultado en consola con .then() y .catch()
function mostrarEstudiante(id) {
    console.log(`Búsqueda del estudiante con ID ${id}`);
    return buscarEstudiantePorId(id)
        .then(estudiante => {
            console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        })
        .finally(() => {
            console.log('-----------------------');
        });
}

//Se encadenan para que la salida salga en orden
mostrarEstudiante(2)
    .then(() => mostrarEstudiante(1))
    .then(() => mostrarEstudiante(10));
