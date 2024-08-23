import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent {


constructor(private router:Router) {
 
}

goto(url:string) 
{
  this.router.navigate([url])
}
  events = [
    { name: 'Orion', image: '' },
    { name: 'Tech Titan Techdown', image: '' },
    { name: 'Tech For Eye', image: '' },
    { name: 'Yukti Yagna', image: '',routerLink:'/yuktiyagna' },
    { name: 'Coders Brawl', image: '' }
  ];

  getCircleStyle(index: number) {
    const angle = (index / this.events.length) * 360;
    const radius = 150; // Adjust radius as needed
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return {
      transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
    };
  }
}
