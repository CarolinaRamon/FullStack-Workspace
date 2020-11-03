




//Hay navegadores que no soportan estos métodos. Podemos chequear que esté definido:
if(typeof(Storage) !== 'undefined'){
    
    //localStorage es una variable de tipo storage y tiene métodos asociados
    //Todo lo que empieza con get o set se denomina getters y setters
    //Guardamos información de forma local:
    localStorage.setItem('apellido', 'Ramon');
    localStorage.setItem('nombre', 'Carolina');
    
    //Para visualizar: en el navegador voy a Inspeccionar, Application, LocalStorage
    //Puedo trabajar directamente en la consola: 
    //localStorage.getItem('apellido'); //Me trae el apellido
    //localStorage.setItem('apellido', 'Zanetti'); //Para cambiar un valor
    //Si existe lo reemplaza, si no existe, lo crea:
    //localStorage.setItem('edad', '36');
    //localStorage.getItem('pais');// Devuelve null porque no existe esa clave
    
    document.getElementById("resultado").innerHTML = localStorage.getItem('nombre');

}else {
    //Si no está definido:
    document.getElementById("resultado").innerHTML = 'Su navegador no soporta LocalStorage.'

}