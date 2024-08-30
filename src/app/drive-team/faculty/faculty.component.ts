import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {

  constructor(private sanitizer:DomSanitizer)
  {

  }

  
  faculty = [
    {
      name: 'Prof. Dr. Maumita Chakraborty',
      image: '/assets/images/members/faculty/moumita.jpeg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Dr. Subhalaxmi Chakraborty',
      image: '/assets/images/members/faculty/subhalaxmi.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Dr. Chiradeep Mukherjee',
      image: '/assets/images/members/faculty/chiradip.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Dr Sudipta Basu Pal',
      image: '/assets/images/members/faculty/sudipta.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Arpita Saha Chowdhury',
      image: '/assets/images/members/faculty/arpita.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Dr. Debanjana Dutta Mitra',
      image: '/assets/images/members/faculty/debanjana.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Dr Anirban Ganguly',
      image: '/assets/images/members/faculty/anirban_ganguly.jpeg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    
    
    {
      name: 'Prof. Dr. Sankhadeep Chaterjee',
      image: '/assets/images/members/faculty/sankhadeep.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Pradipta Sarkar',
      image: '/assets/images/members/faculty/pradipta.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'9433443926',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Sudipta Sikdar',
      image: '/assets/images/members/faculty/sudipto.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'7278886140',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
  ];

  
  sanitize(mobile:string):SafeUrl
  {
    const url = `https://wa.me/+91${mobile}`
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
