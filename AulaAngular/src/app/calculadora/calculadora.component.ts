import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  valor1 : number = 0;
  valor2 : number = 0;
  sinal : string= "";
  resultado: number;

  conta(){
    switch(this.sinal){
      case "+":
      this.resultado = this.valor1 + this.valor2;
      break;
      case "-":
      this.resultado = this.valor1 - this.valor2;
      break;
      case "x":
      this.resultado = this.valor1 * this.valor2;
      break;
      case "/":
      this.resultado = this.valor1 / this.valor2;
      break;
    }
  };
}
