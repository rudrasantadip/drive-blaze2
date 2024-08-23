import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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
    { name: 'Orion', image: '',routerLink:'/orion' },
    { name: 'Tech Titan Techdown', image: '',routerLink:'/techtitantakedown' },
    { name: 'Tech For Eye', image:'',routerLink:'/techforeye' },
    { name: 'Yukti Yagna', image: '',routerLink:'/yuktiyagna' },
    { name: 'Algo Arcade', image: '', routerLink:'/algoarcade'}
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
