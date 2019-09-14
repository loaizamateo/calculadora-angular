import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Parser } from 'expr-eval';

@Component({
  selector: 'app-calculadora',
  styles: ['.error {color: red}'],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  stringCalc = "";
  htmlStr = ""
  getValue(event){
    this.stringCalc = this.stringCalc.concat(event.target.textContent.trim());
    this.htmlStr = this.stringCalc;
  }

  result(){
    try{
      var parser = new Parser();
      var expr = parser.parse( this.stringCalc );
      this.htmlStr = expr.evaluate();
    }
    catch{
      this.htmlStr = "<p class='error'>ERROR</p>"
    }
    
    this.stringCalc = "";
  }

}
