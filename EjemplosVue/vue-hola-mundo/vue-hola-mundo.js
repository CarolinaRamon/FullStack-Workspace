
//Renderización declarativa = Vinculación con el DOM
//Modifico el html a través de Vue:

var app = new Vue({
    el: "#app",
    data: {
        mensaje: "Hola, Mundo!",
        num: 12
    }
})

app.mensaje = "Hola, Caro!";

const app2 = new Vue({
    el: '#app2',
    data: {
        titulo: "Presione click para dirigirse a la web..."
    }
})




