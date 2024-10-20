// Isaac Valenzuela
// Link de la coleccion de API`s https://github.com/public-api-lists/public-api-lists.git
// Link de la API de musica seleccionada: https://binaryjazz.us/wp-json/genrenator/v1/genre/

// consumo de la API mediante promesa usando el .then() y .catch()
fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/')
    .then(response => response.json())
    .then(data => console.log("Cancion generada: ", data))
    .catch(error => console.error("Error: ", error));


// consumo de la API mendiante el async y await
const APImusica = async () => {
    try {
        const respuesta = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/story/')
        const datos = await respuesta.json()
        console.log("Cancion generada: ", datos)
    } catch (error) {
        console.error("Error: ", error)
    }
}

APImusica()