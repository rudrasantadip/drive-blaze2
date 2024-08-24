import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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

  constructor(private ngxService: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 3000);
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
