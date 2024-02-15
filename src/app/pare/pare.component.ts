import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pare',
  templateUrl: './pare.component.html',
  styleUrls: ['./pare.component.css']
})
export class PareComponent {
constructor(){
  this.numero1=Math.round(Math.random()*100);
  this.numero2=Math.round(Math.random()*100);
}
 numero1:number=0;
 numero2:number=0;

  resultadoSuma:number=0;
  resultadoResta:number=0;
  resultadoProducto:number=0;
  resultadoDivision:number=0;
restar(event: any) {
  this.resultadoResta= event.resultResta;

}
dividir(event: any) {
  this.resultadoDivision=event.resultDivision
}
multiplicar(event: any) {
  this.resultadoProducto=event.resultProducto
}
sumar(event: any) {
  this.resultadoSuma= event.resultSuma;

}

generar() {
window.location.reload();

}

}
