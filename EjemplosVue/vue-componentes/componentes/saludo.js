//COMPONENTE SALUDO:

Vue.component('saludo',{

    template: //html
    //En el template de más de una línea tengo que usar la comilla invertida y tengo que incluir todo dentro de un contenedor:

    `
    <div>
        <h1>{{msj}}</h1>
        <h2>{{msj2}}</h2>
    </div> 
    `,     
     
    data(){
        return{
            msj: 'Hola dinámico (componentes)',
            msj2: 'Titulo h2'
        }
    }
})

     


