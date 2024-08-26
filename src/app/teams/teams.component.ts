import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent 
{
  core=[
    {
      name:'Pratyay Chaterjee',
      image:'/assets/images/members/core/2.png'
    },
    {
      name:'Sayan Das',
      image:'/assets/images/members/core/5.png'
    },
    {
      name:'Soumik Das',
      image:'/assets/images/members/core/4.png'
    },
    {
      name:'Anuja Roy',
      image:'/assets/images/members/core/8.png'
    },
    {
      name:'Sarbojit Poddar',
      image:'/assets/images/members/core/3.png'
    },
    {
      name:'Santadip Rudra',
      image:'/assets/images/members/core/1.png'
    },
    {
      name:'Anuran Bhowmik',
      image:'/assets/images/members/core/7.png'
    },
    {
      name:'Sayan Ghosh',
      image:'/assets/images/members/core/6.png'
    }
  ];


  conveynors=[
    {
      name:'Diptadip Biswas',
      image:'/assets/images/members/conveynors/1.png'
    },
    {
      name:'Subhojit Dutta',
      image:'/assets/images/members/conveynors/2.png'
    },
    {
      name:'Saswata Mukherjee',
      image:'/assets/images/members/conveynors/3.png'
    },
    {
      name:'Asmita Ganguly',
      image:'/assets/images/members/conveynors/4.png'
    },
    {
      name:'Ayan Koley',
      image:'/assets/images/members/conveynors/5.png'
    },
  ]


  coordinators=[
    {
      name:'Ishita Mondal',
      image:'/assets/images/members/coordinators/1.png'
    },
    {
      name:'Chameli Samanta',
      image:'/assets/images/members/coordinators/2.png'
    },
    {
      name:'Diya Majhi',
      image:'/assets/images/members/coordinators/3.png'
    },
    {
      name:'Pratik Saha',
      image:'/assets/images/members/coordinators/4.png'
    },
  ]
}
