import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})

export class ImcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  altura = document.querySelector('#altura')
  alturaN: number = +altura;
  altura3: number = (this.alturaN * this.alturaN)
  peso = document.querySelector('#peso')
  pesoN: number = +peso;
  zero = 0
  imcC = (this.pesoN * this.altura3)

  calcIMC() {

    const alt = this.altura
    const imc = this.imcC
    console.log(alt);
  }
}
