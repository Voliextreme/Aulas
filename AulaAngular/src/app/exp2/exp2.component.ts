import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp2',
  templateUrl: './exp2.component.html',
  styleUrls: ['./exp2.component.css']
})
export class Exp2Component implements OnInit {

  @Input() nameRecebido;
  constructor() { }

  ngOnInit(): void {
  }

}
