import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
  fullText: string = 'today!';
  displayText: string = '';
  private index: number = 0;
  private typingSpeed: number = 100; // Typing speed in milliseconds
  constructor(private router:Router)
  {}
  
  goto(url:string)
  {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.typeText();
  }



  typeText(): void {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }

  
}
