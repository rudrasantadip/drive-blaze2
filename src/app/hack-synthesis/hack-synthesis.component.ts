import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hack-synthesis',
  templateUrl: './hack-synthesis.component.html',
  styleUrls: ['./hack-synthesis.component.css']
})
export class HackSynthesisComponent implements OnInit,OnDestroy{


  // script variable
  private script:HTMLScriptElement;
  constructor(private renderer:Renderer2){}
  

  ngOnInit(): void {
    this.appendScript();
  }

  ngOnDestroy(): void {
    if(this.script)
    {
      this.renderer.removeChild(document.body,this.script);
    }
  }

  register() {
    window.location.href = 'https://devfolio.co';
  }

  // DevFolio Button integration
  // <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
  appendScript(){
    this.script = this.renderer.createElement('script');
    this.script.src='https://apply.devfolio.co/v2/sdk.js';
    this.script.async=true;
    this.script.defer=true;
    this.renderer.appendChild(document.body,this.script);
  }

}
