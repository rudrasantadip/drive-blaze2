import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  constructor(private sanitizer:DomSanitizer)
  {

  }

  sanitize(mobile:string):SafeUrl
  {
    const url = `https://wa.me/+91${mobile}`
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  coordinators = [
    {
      name: 'Ishita Mondal',
      image: '/assets/images/members/coordinators/ishita.jpg',
      insta: 'https://www.instagram.com/is.hita2575?utm_source=qr&igsh=MWo4aDNxZjY5YXVocA==',
      linkedin: 'https://www.linkedin.com/in/ishita-mondal-8b3062254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      x: '',
      whatsapp: '8777073845',
    },
    {
      name: 'Samadrita Bhattacharaya',
      image: '/assets/images/members/coordinators/samadrita.jpeg',
      insta: '',
      linkedin: '',
      x: '',
      whatsapp: '8017264492',
    },
    {
      name: 'Arnabh Sinha',
      image: '/assets/images/members/coordinators/arnab.jpeg',
      insta: '',
      linkedin: '',
      x: '',
      whatsapp: '82403 41374',
    },
    {
      name: 'Chameli Samanta',
      image: '/assets/images/members/coordinators/2.png',
      insta: '',
      linkedin: 'https://in.linkedin.com/in/chameli-samanta-28972b2bb',
      x: '',
      whatsapp: '9474177225',
    },
    {
      name: 'Diya Majhi',
      image: '/assets/images/members/coordinators/3.png',
      insta: 'https://www.instagram.com/an_enveloped_letter?igsh=MXA1ZGJsNm5penZnOQ==',
      linkedin: 'https://www.linkedin.com/in/diya-maji-83559228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      x: '',
      whatsapp: '9874749434',
    },
    {
      name: 'Dipan Guha',
      image: '/assets/images/members/coordinators/dipan_guha.jpeg',
      insta: '',
      linkedin: '',
      x: '',
      whatsapp:'',
    },
    {
      name: 'Arka Nandi',
      image: '/assets/images/members/coordinators/arka_nandi.jpeg',
      insta: '',
      linkedin: '',
      x: '',
      whatsapp:'',
    },
    {
      name: 'Pratik Saha',
      image: '/assets/images/members/coordinators/pratik.jpeg',
      insta: 'https://www.instagram.com/x_disaster__xx?igsh=NDV0b2ZqeTFmZmMz',
      linkedin: 'https://www.linkedin.com/in/pratik-saha-93431424a/',
      x: 'https://x.com/sahapratik390?t=xSDakno8AvKGrlR6I4Gkpw&s=08',
      whatsapp: '7890330005',
    },
  ];
}
