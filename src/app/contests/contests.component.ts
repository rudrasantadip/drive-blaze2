import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css'],
})
export class ContestsComponent {
  constructor(private router: Router) {}

  goto(url: string) {
    window.location.href = url;
  }

  events = [
    {
      name: 'Orion',
      image: '/assets/images/3.png',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScpLrVxG7DMXDJgBAMg0JPFw_SfFo7b3Oaqu9S_q4E_e3IDXA/viewform',
    },
    {
      name: 'Tech Titan Takedown',
      image: '/assets/images/2.png',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSfmtKZoc6RpSX3bNhTB293Tvx_rHN0iFKzRDgfQ-u5kDmYrkg/viewform',
    },
    {
      name: 'Tech For Eye',
      image: '/assets/images/4.png',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSdgJTnlBCr5SC9AW4juNogHjB37qHldvyvEMzsWk97aKyk9dQ/viewform',
    },
    {
      name: 'Yukti Yagna',
      image: '/assets/images/1.png',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScPTJHWvW2143YlatEuHfTX1OgreIMgtniYsMTf31jglawK-Q/viewform',
    },
    { name: 'Algo Arcade', image: '/assets/images/5.png', routerLink: '' },
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
