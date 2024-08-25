import { HostListener, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

constructor(private router:Router) {
}


goto(arg0: string) {
  this.router.navigate([arg0]);
  this.closeButton();
}

screenWidth:number;


ngOnInit(): void {
  this.screenWidth=window.window.innerWidth;
}

@HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }


@Output() navBarEvent = new EventEmitter<boolean>();
@Input() showNavBar:boolean

closeButton() 
{
this.navBarEvent.emit(false);
}

getClass():string
{
  if(this.screenWidth>=1048)
  {
    return 'layout-container';
  }
  else if(this.showNavBar==true)
  {
    return 'layout-container shownav';
  }
  else if(this.showNavBar==false)
  {
    return 'hidenav';
  }
  return '';
}

}
