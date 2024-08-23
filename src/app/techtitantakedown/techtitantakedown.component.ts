import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-techtitantakedown',
  templateUrl: './techtitantakedown.component.html',
  styleUrls: ['./techtitantakedown.component.css']
})
export class TechtitantakedownComponent {

  register()
  {
    window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSfmtKZoc6RpSX3bNhTB293Tvx_rHN0iFKzRDgfQ-u5kDmYrkg/viewform'
  }
}
