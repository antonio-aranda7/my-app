import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  numeroClics= 10;
  
  materias = ["Desarrollo web II", "Framework Frontend", "Redes"]

  nombre='';
  apellido='';
  // definimos un objeto llamado art con tres propiedes:
  art={
    codigo:null,
    descripcion:null,
    precio:null
  }

//Definimos un vector de objetos llamado 'articulos' y almacenamos 5 elementos:

  articulos = [{codigo:1, descripcion:'papas', precio:10.55},
               {codigo:2, descripcion:'manzanas', precio:12.10},
               {codigo:3, descripcion:'melon', precio:52.30},
               {codigo:4, descripcion:'cebollas', precio:17},
               {codigo:5, descripcion:'calabaza', precio:20},
              ];

  hayRegistros() {
    return this.articulos.length>0;              
  }
  /*Recorremos el vector y controlamos uno a uno el código del artículo seleccionado con cada uno de los elementos del vector. El que coincide 
  lo eliminamos del vector llamando al método splice indicando la posición y cuantas componentes borrar a partir de ese.*/
  borrar(art) {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==art.codigo)
      {
        this.articulos.splice(x,1);
        return;
      }
  }
  /*En este método primero recorremos el vector articulos para comprobar si hay algún otro artículo con el mismo código. En el caso que no 
  exista procedemos a añadir un nuevo elemento llamando al método push y pasando un objeto que creamos en dicho momento con los datos 
  almacenados en el objeto 'art' que se encuentra enlazado con el formulario.
  Luego asignamos null a todas las propiedades del objeto art con el objetivo de borrar todos los 'input' del formulario.
  Al agregar un elemento al vector 'Angular' se encarga de actualizar la vista sin tener que indicar nada en nuestro código.*/
  agregar() {
    for(let x=0;x<this.articulos.length;x++)
    if (this.articulos[x].codigo==this.art.codigo)
    {
      alert('ya existe un articulo con dicho codigo');
      return;
    }        
    this.articulos.push({codigo:this.art.codigo,
                         descripcion:this.art.descripcion,
                         precio:this.art.precio });
    this.art.codigo=null;
    this.art.descripcion=null;
    this.art.precio=null;    
  }
  /*Lo único que hacemos es actualizar el objeto art del modelo con el artículo que acaba de seleccionar el operador (llega como parámetro 
  el artículo seleccionado)*/
  seleccionar(art) {
    this.art.codigo=art.codigo;
    this.art.descripcion=art.descripcion;
    this.art.precio=art.precio;
  }
  /*Buscamos el código de articulo del control 'input' dentro del vector, en caso de encontrarlo procedemos a modificar la descripción y 
  precio.*/
  modificar() {
    for(let x=0;x<this.articulos.length;x++)
      if (this.articulos[x].codigo==this.art.codigo)
      {
        this.articulos[x].descripcion=this.art.descripcion;
        this.articulos[x].precio=this.art.precio;
        return;
      }        
    alert('No existe el código de articulo ingresado');
  }
}
