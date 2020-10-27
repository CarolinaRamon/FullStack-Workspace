
const ejemplo2 = new Vue({
    el: '#ejemplo2',
    data: {
        titulo: 'Ejemplo 2',
        frutas: [
            { nombre: 'Pera', cantidad: 10},
            { nombre: 'Manzana', cantidad: 0},
            { nombre: 'Banana', cantidad: 10}
        ]
    }
})

ejemplo2.titulo = 'Titulo: v-for y v-if';