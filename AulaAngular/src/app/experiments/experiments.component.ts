import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name : string = "Tiago";
  changeName(event){
    this.name = event.target.value;
  }
}
