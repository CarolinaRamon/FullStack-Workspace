var persona = {
    nombre: "Juan",
    apellido: "Paz",
    dni: 11223344,
    // Métodos:
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
