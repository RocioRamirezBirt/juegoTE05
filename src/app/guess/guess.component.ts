import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, NgControl, FormsModule,  Validators } from '@angular/forms';
import { datosJuego } from '../app.component';

@Component({
  selector: 'app-guess',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guess.component.html',
  styleUrl: './guess.component.css'
})
export class GuessComponent {
    numero:number = -1
    adivina:boolean = false
    intentosAgotados:boolean = false

    numerosIntroducidos:number[] = [];

    @Input() bienvenida:boolean = false
    @Input() configuracion: datosJuego | undefined;
    @Input() Aleatorio:number = 0;
    @Input() mensaje:string='';

  adivinar():void{

    if(this.configuracion && this.configuracion.nombre ) {
      const nombre = this.configuracion.nombre;
      const apellido = this.configuracion.apellido;
      const rango =  this.configuracion.rango;
      const intentos = this.configuracion.intentos;

      if(this.numero > rango){

        alert('El numero introducido no esta en el rango de numeros generados')
      }else {
          this.adivina = true

          this.numerosIntroducidos.push(this.numero);
          
          if(this.numero === this.Aleatorio){
            this.mensaje = '¿Has Adivinado?: SI';
          }else{
            this.mensaje = '¿Has Adivinado: NO';
            this.configuracion.intentos--;
          }

          if(this.configuracion.intentos === 0){
            this.intentosAgotados = true
          }



      }


      
    }else{
      alert('No se ha proporcionado los datos')
    }   
    
  }

}
