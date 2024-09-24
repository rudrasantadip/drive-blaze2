import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  constructor(private sanitizer:DomSanitizer)
  {

  }

  sanitize(mobile:string):SafeUrl
  {
    const url = `https://wa.me/+91${mobile}`
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
  core = [
    {
      name: 'Pratyay Chaterjee',
      image: '/assets/images/members/core/2.png',
      insta:'https://www.instagram.com/my.self_pratyay',
      x:'https://x.com/PratyayChatter6',
      linkedin:'https://www.linkedin.com/in/pratyay-chatterjee-baa466242',
      whatsapp:''
    },
    {
      name: 'Sayan Das',
      image: '/assets/images/members/core/sayan.jpeg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:''
    },
    {
      name: 'Soumik Das',
      image: '/assets/images/members/core/4.png',
      insta:'https://www.instagram.com/soumik_2.0/',
      x:'https://x.com/soumik_das0',
      linkedin:'https://www.linkedin.com/in/soumik-das-076bb0285',
      whatsapp:'7601885361'
    },
    {
      name: 'Diptayan Manna',
      image: '/assets/images/members/core/diptayan.jpeg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:''
    },
    {
      name: 'Anuja Roy',
      image: '/assets/images/members/core/8.png',
      insta:'https://www.instagram.com/nooojaah/',
      x:'',
      linkedin:'http://www.linkedin.com/in/anuja-roy-906430217',
      whatsapp:'9007811583'
    },
    {
      name: 'Sarbojit Podder',
      image: '/assets/images/members/core/sarba.jpeg',
      insta:'https://www.instagram.com/sarbojit_03?igsh=MTk4anM1eHlhbG5wcQ==',
      x:'',
      linkedin:'https://www.linkedin.com/in/sarbojit-podder-4444b6255',
      whatsapp:'6289777382'
    },
    {
      name: 'Santadip Rudra',
      image: '/assets/images/members/core/1.png',
      insta:'',
      x:'',
      linkedin:'http://www.linkedin.com/in/santadip-rudra-b61650249',
      whatsapp:'7044522841'
    },
    {
      name: 'Anuran Bhowmik',
      image: '/assets/images/members/core/anuran.jpeg',
      insta:'https://www.instagram.com/myself_anuran',
      x:'',
      linkedin:'',
      whatsapp:'9002245776'
      
    },
  ];
}
