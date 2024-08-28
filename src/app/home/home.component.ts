import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

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
  private targetDate = new Date('2024-09-28T00:00:00').getTime();
  private subscription!: Subscription;


  public days: number = 0;
  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;


  constructor(private router:Router)
  {}
  
  goto(url:string)
  {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.typeText();
    
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

 
  private updateCountdown(): void {
    const currentTime = new Date().getTime();
    const timeDifference = this.targetDate - currentTime;

    if (timeDifference > 0) {
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  typeText(): void {
    if (this.index < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }

  
}
