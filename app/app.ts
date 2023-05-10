console.log("proyecto");
class Impresora {
    private marca: string;
    private modelo: string;
    private tipo: string;
    private precio: number;
  
    constructor(
      marca: string = "",
      modelo: string = "",
      tipo: string = "",
      precio: number = 0
    ) {
      this.marca = marca;
      this.modelo = modelo;
      this.tipo = tipo;
      this.precio = precio;
    }
  
    getMarca(): string {
      return this.marca;
    }
  
    setMarca(marca: string): void {
      this.marca = marca;
    }
  
    getModelo(): string {
      return this.modelo;
    }
  
    setModelo(modelo: string): void {
      this.modelo = modelo;
    }
  
    getTipo(): string {
      return this.tipo;
    }
  
    setTipo(tipo: string): void {
      this.tipo = tipo;
    }
  
    getPrecio(): number {
      return this.precio;
    }
  
    setPrecio(precio: number): void {
      this.precio = precio;
    }
  
    getInfo(): string {
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