import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {

  
  constructor(private sanitizer:DomSanitizer)
  {

  }

  sanitize(mobile:string):SafeUrl
  {
    const url = `https://wa.me/+91${mobile}`
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  faculty = [
    {
      name: 'Prof. Dr. Maumita Chakraborty',
      image: '/assets/images/members/faculty/moumita.jpeg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'9088104604',
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
      whatsapp:'9831188685',
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
      whatsapp:'9804244362',
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
      whatsapp:'9674335060',
      designation: 'Faculty Coordinator',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
    },
    {
      name: 'Prof. Dr Rajendrani Mukherjee',
      image: '/assets/images/members/faculty/rajendrani.jpg',
      insta:'',
      x:'',
      linkedin:'',
      whatsapp:'8777051141',
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
      whatsapp:'9830677260',
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
      whatsapp:'9674033751',
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
      whatsapp:'8910874737',
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
      image: '/assets/images/members/core/5.png',
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
      name: 'Sarbojit Poddar',
      image: '/assets/images/members/core/3.png',
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

  conveynors = [
    {
      name: 'Diptadip Biswas',
      image: '/assets/images/members/conveynors/diptadip.jpeg',
      designation: 'Lead Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',

      insta: 'https://www.instagram.com/diptadip.biswas.58/',
      linkedin: 'https://www.linkedin.com/in/diptadipbiswas/',
      x: 'https://x.com/biswas_diptadip',
      whatsapp: '8348284337',
    },
    {
      name: 'Subhajit Dutta',
      image: '/assets/images/members/conveynors/2.png',
      designation: 'Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',

      insta: '',
      linkedin: '',
      x: '',
      whatsapp: '8583833292',
    },
    {
      name: 'Saswata Mukherjee',
      image: '/assets/images/members/conveynors/saswata.jpg',
      designation: 'Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',

      insta: 'https://www.instagram.com/saswata_m?igsh=bHNrbHQxZWluOHZq',
      linkedin: 'https://www.linkedin.com/in/saswata-mukherjee-41137a212?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FBEP2qiASdCY616glcd2eQ%3D%3D',
      x: 'https://x.com/Saswata200201?t=AS_ustpyI309hpquZHMiNg&s=08',
      whatsapp: '8584874226',
    },
    {
      name: 'Asmita Chakraborty',
      image: '/assets/images/members/conveynors/4.png',
      designation: 'Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',

      insta: '',
      linkedin: '',
      x: '',
      whatsapp: '',
    },
    {
      name: 'Dipti Ghosh',
      image: '/assets/images/members/conveynors/dipti.jpg',
      designation: 'Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',

      insta: 'https://www.instagram.com/better_being_apathetic?igsh=eGxkZm5obG9pcXNt',
      linkedin: 'http://linkedin.com/in/dipti-ghosh',
      x: '',
      whatsapp: '9123319799',
    },
    {
      name: 'Ayan Koley',
      image: '/assets/images/members/conveynors/ayan.jpg',
      designation: 'Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',

      insta: '',
      linkedin: '',
      x: '',
      whatsapp: '9874870505',
    },
    {
      name: 'Sayan Ghosh',
      image: '/assets/images/members/core/6.png',
      designation: 'Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/sayan-ghosh-speaks',
      x: '',
      whatsapp: '9832454018',
    },
    {
      name: 'Md. Afsar Uddin',
      image: '/assets/images/members/conveynors/md_afsar_uddin.jpeg',
      designation: 'Convenor',
      association: 'UEM, Kolkata',
      logo: '/assets/images/uem_white.png',
      insta: '',
      linkedin: 'https://www.linkedin.com/in/sk-md-afsaruddin-40a87a228/',
      x: '',
      whatsapp: '9830442752',
    },
    {
      name: 'Arkadeep Sen',
      image: '/assets/images/members/conveynors/arkadeep.jpeg',
      designation: 'Convenor',
      association: 'UEM, Kolkata',
      logo: '/assets/images/uem_white.png',

      insta: '',
      linkedin: 'https://www.linkedin.com/in/arkadeep-sen-745b98255/',
      x: '',
      whatsapp: '8100034944',
    },
  ];

  coordinators = [
    {
      name: 'Ishita Mondal',
      image: '/assets/images/members/coordinators/1.png',
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
      name: 'Pratik Saha',
      image: '/assets/images/members/coordinators/4.png',
      insta: 'https://www.instagram.com/x_disaster__xx?igsh=NDV0b2ZqeTFmZmMz',
      linkedin: 'https://www.linkedin.com/in/pratik-saha-93431424a/',
      x: 'https://x.com/sahapratik390?t=xSDakno8AvKGrlR6I4Gkpw&s=08',
      whatsapp: '7890330005',
    },
  ];
}
