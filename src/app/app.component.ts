import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  //variable to store the screen width
  screenWidth: number;

  // variable to check if navbar is on
  isNavBarOn: boolean = false;
  title = 'drive-blaze';

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }



  navBarStatus(data: boolean) {
    this.isNavBarOn = data;
  }

  openNav() {
    this.isNavBarOn = !this.isNavBarOn;
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }
}
