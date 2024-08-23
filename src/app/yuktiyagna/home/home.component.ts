import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router)
  {

  }

  register() {
     window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScPTJHWvW2143YlatEuHfTX1OgreIMgtniYsMTf31jglawK-Q/viewform';
  }
}
