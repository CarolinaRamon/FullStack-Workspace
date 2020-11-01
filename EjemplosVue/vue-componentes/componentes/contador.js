//COMPONENTE CONTADOR:

Vue.component('contador', {
    template: 
        `
        <div>
            <h3>{{num}}</h3>
            <button @click="num++">+</button> 
        </div>
        `,
    // Un botón y tengo programado el evento click que ejecuta Javascript nativo/puro: es el operador ++ que me incrementa la propiedad num en 1 cada vez que hago click en el botón.
    data() {
        return {
            num: 0
        }
    }
})