import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})


export class PersonalComponent implements OnInit {
  
  display = 'listview'
  displayC = 'none'
  displayM = 'none'
  none = 'none'
  
  

  showCari() {
    if (this.displayC != this.none ) {
      this.displayC = 'none';
    } else {
      this.displayC = 'block';
      this.displayM = 'none';
    }
  }

  showMuzy() {
    if (this.displayM != this.none ) {
      this.displayM = 'none';
    } else {
      this.displayM = 'block'
      this.displayC = 'none';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
