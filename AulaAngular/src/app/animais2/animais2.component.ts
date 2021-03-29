import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animais2',
  templateUrl: './animais2.component.html',
  styleUrls: ['./animais2.component.css']
})
export class Animais2Component implements OnInit {

  @Input() animalRecebido;
  constructor() { }

  ngOnInit(): void {
  }

}
