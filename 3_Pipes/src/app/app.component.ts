import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = "Joel";
  nombre2:string = 'fraNcis joeL echE paIva'
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  PI:number = Math.PI;
  a:number = 0.23412;
  salario:number = 1234.50;

  heroe = {
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      clase:'Primera',
      casa:'19'
    }
  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('Llegó la data!'), 2000);
  });

  fecha:Date = new Date();
  video:string = "XbGs_qK2PQA";
  activar:boolean = false;

}
