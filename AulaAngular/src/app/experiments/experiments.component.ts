import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  @ViewChild ('refExp') referencia;
  constructor() { }

  ngOnInit(): void {
  }
  name : string = "Tiago";

  changeName(event){
    this.name = event.target.value;
  }

  arrayAnimais : Array<string> = ["Mamaco", "Corba", "Hiporinoceronte", "Girigaio"]

  analisarReferencia(){
    console.log(this.referencia?this.referencia.nativeElement.value: "nao existe");
    this.referencia.nativeElement.style.background = "red";
  }
  /*analisarReferenciaPorParamentro(referencia){
    console.log(referencia?this.referencia.nativeElement.value: "nao existe");
    referencia.style.background = "red";
  }*/
}
