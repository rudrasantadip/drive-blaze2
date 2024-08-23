import { Component } from '@angular/core';

@Component({
  selector: 'app-hack-synthesis',
  templateUrl: './hack-synthesis.component.html',
  styleUrls: ['./hack-synthesis.component.css']
})
export class HackSynthesisComponent {
  register() {
    window.location.href = 'https://devfolio.co';
  }
}
