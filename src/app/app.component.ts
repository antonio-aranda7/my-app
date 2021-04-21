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
}
/*
export 

  art={
    codigo:null,
    description:null,
    precio:null
  }

  agregar(){
    for(let x=0;x<this.articulos.length;x++)
    if
  }
//Comom definein un objeto apra una interface
*/