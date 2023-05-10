"use strict";
console.log("proyecto");
class Impresora {
    constructor(marca = "", modelo = "", tipo = "", precio = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.precio = precio;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}, Precio: ${this.precio}`;
    }
}
// Programa principal
const impresora1 = new Impresora();
impresora1.setMarca("Epson");
impresora1.setModelo("L210");
impresora1.setTipo("Inyección de tinta");
impresora1.setPrecio(250);
const impresora2 = new Impresora("HP", "Deskjet 3635");
impresora2.setTipo("Inyección de tinta");
impresora2.setPrecio(150);
console.log(impresora1.getInfo());
console.log(impresora2.getInfo());
