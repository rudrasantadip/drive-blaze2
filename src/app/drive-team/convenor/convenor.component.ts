import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-convenor',
  templateUrl: './convenor.component.html',
  styleUrls: ['./convenor.component.css']
})
export class ConvenorComponent {

  constructor(private sanitizer:DomSanitizer)
  {

  }

  sanitize(mobile:string):SafeUrl
  {
    const url = `https://wa.me/+91${mobile}`
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  conveynors = [
    {
      name: 'Diptadip Biswas',
      image: '/assets/images/members/conveynors/diptadip.jpg',
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
    {
      name: 'Subham Ghosh',
      image: '/assets/images/members/conveynors/subham.jpeg',
      designation: 'Convenor',
      association: 'DriveBlaze',
      logo: '/assets/images/logo.png',

      insta: '',
      linkedin: '',
      x: '',
      whatsapp: '',
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
  ];
}
