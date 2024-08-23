import { Component } from '@angular/core';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css']
})
export class ContestsComponent {
  events = [
    { name: 'DevQ', image: 'assets/images/webdev.jpg' },
    { name: 'Tech Titan Techdown', image: 'assets/images/cyber.jpg' },
    { name: 'Tech For Eye', image: 'assets/images/techphoto.jpg' },
    { name: 'Yukti Yagna', image: 'assets/images/techquiz.jpg' },
    { name: 'Coders Brawl', image: 'assets/images/codersbrawl.jpg' }
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
