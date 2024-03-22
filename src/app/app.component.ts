import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, NgControl, FormsModule,  Validators } from '@angular/forms';
import { GuessComponent } from './guess/guess.component';

// creas los parametros
export interface datosJuego {
  nombre: string,
  apellido: string, 
  rango: number,
  intentos: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, GuessComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'DWEC05-Rocio Ramirez';
  bienvenida:boolean = false;
  Aleatorio:number = 0;

  @Output() datosRecogidos = new EventEmitter<datosJuego>();

  
  // inicializa variables
  configuracion:datosJuego = {
    nombre: '',
    apellido: '',
    rango: 0,
    intentos: 0,
  };

  
  recogerDatos():void {

    this.bienvenida = true
    // Si no esta relleno todos los campos muestra un mensaje de alerta
    if(this.configuracion.nombre && this.configuracion.apellido && this.configuracion.rango && this.configuracion.intentos){

      
      //crear objeto
      const configuracion:datosJuego = {
        nombre: this.configuracion.nombre,
        apellido: this.configuracion.apellido,
        rango: this.configuracion.rango,
        intentos: this.configuracion.intentos,
      }

          
      //numero aleatorio generado
      this.Aleatorio = Math.floor(Math.random()*(configuracion.rango+1));

      console.log('Numero aleatorio generado: ', this.Aleatorio);
      console.log('Configuracion ', this.configuracion)

    }else {
      alert('Complete todos los campos del formulario');
      this.bienvenida = false;
    }

    
    
  }

}
