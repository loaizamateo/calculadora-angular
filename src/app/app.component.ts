import { Component , ViewEncapsulation } from '@angular/core';
import { Parser } from 'expr-eval';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  styles: ['.error {color: red}'],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

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
