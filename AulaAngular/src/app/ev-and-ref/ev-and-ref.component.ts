import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cor: string = "teal";

  changeColor(corR:string){
    this.cor = corR;
  }
  fade(refInput){
    if(refInput.style.opacity == '0'){
      refInput.style.opacity = '1';
    }else
    refInput.style.opacity = '0';
  }
  tamanho:number = 600;
  tamanho2:number = 600;
  size(refInput:HTMLElement){
    refInput.style.height = this.tamanho+"px";
    this.tamanho *= 2;
  }

  Bold(refInput:HTMLElement){
    refInput.style.position = 'absolute';
    refInput.style.top = this.tamanho +"px";
    refInput.style.left = this.tamanho2 +"px";
    if(Math.random()*100 > 50){
      this.tamanho += Math.random()*100;
      this.tamanho2 += Math.random()*100;
    }else {
      this.tamanho -= Math.random()*100;
      this.tamanho2 -= Math.random()*100;
    }
  }
}
