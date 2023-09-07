
const formulario = document.getElementById("formIngreso")

formulario.addEventListener("submit", function(e){
    e.preventDefault() // evita que se ejecute lo que viene por defecto en el navegador
    
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const fechanacimiento = document.getElementById("fechanacimiento").value

    const data = {   // Los datos que queremos enviar en solicitud POST en formato JSON
        nombre : nombre,
        apellido : apellido,
        fechanacimiento : fechanacimiento
    }

    const url =  " https://jsonplaceholder.typicode.com/users" // url a donde queremos enviar los datos

    const opciones = {  // Configurar la solicitud HTTP
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    }


    fetch(url , opciones)
        .then(response=> response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data)
        })
    .catch(error => {
        console.error("Ocurrio un error al cargar los datos:", error)
    })
})