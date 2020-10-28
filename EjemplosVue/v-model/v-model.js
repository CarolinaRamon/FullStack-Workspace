

const ejemplo2 = new Vue({
    el: '#ejemplo2',
    data: {
        titulo: 'Ejemplo 2',
        frutas: [
            { nombre: 'Pera', cantidad: 10},
            { nombre: 'Manzana', cantidad: 0},
            { nombre: 'Banana', cantidad: 10}
        ],
        nuevaFruta:'',
        total: 0
    },
    methods: {
        agregarFruta(){
            // Voy a ejecutar un método desde Vue para confirmar que esté funcionando. Una vez que esté segura de eso hago el push
            //console.log('Presionaste agregar!');
            this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0})
            this.nuevaFruta =''
            // La cantidad la dejo fija en 0. La fruta la tomo del input
        }
    },

    //Propiedad computada:
    //Las propiedades computadas, a diferencia de los métodos que se ejecutan on demand, se ejecutan ante un cambio.
    //No la tengo que invocar, se ejecuta sola ante los cambios.
    computed: {
            sumarFrutas(){
                this.total=0;
                for (fruta of this.frutas) {
                    this.total += fruta.cantidad;
                }
                return this.total;
            }    
    }
})

ejemplo2.titulo = 'Titulo: v-for y v-if';