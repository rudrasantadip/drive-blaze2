import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

isExpanded:boolean=false;



toogleFooter()
{ 
  this.isExpanded=!this.isExpanded;
}

}
