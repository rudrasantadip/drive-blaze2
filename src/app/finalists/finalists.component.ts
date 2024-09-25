import { Component } from '@angular/core';

export interface Team
{
  slNo:number
  teamName:string;
  members:string[]
}

@Component({
  selector: 'app-finalists',
  templateUrl: './finalists.component.html',
  styleUrls: ['./finalists.component.css']
})
export class FinalistsComponent {
  finalists:  Team[]= [
    {
      slNo:1,
      teamName: 'Decentralized Debuggers',
      members: ['Debayudh Basu', 'Sankhakdeep Chowdhury']
    },
    {
      slNo:2,
      teamName: 'TechFusion',
      members: ['Swarnendu Maity', 'Ankan Bera', 'Gobinda Dey']
    },
    {
      slNo:3,
      teamName: 'CreaTech',
      members: ['Aishik Pal', 'Arijit Mukherjee', 'Ankan Das']
    }
    ,  
    {
      slNo:4,
      teamName: 'Pwn Patrol',
      members: ['Nabanita Ghosh', 'Sagnik Mukherjee', 'Sangeeta Guha']
    },
    {
      slNo:5,
      teamName: 'Tech Agni',
      members: ['Soumya Chakraborty', 'Pradipta Talukder', 'Swapnadeep Poddar']
    },
    {
      slNo:6,
      teamName: 'TechTrio',
      members: ['Suranjan Kumar', 'Arghyadeep Chaterjee', 'Lipika Shaw']
    },
    {
      slNo:7,
      teamName: 'Ayaan Adil',
      members: ['Ayaan Adil',]
    }
    ,
    {
      slNo:8,
      teamName: 'Asterik',
      members: ['Pritam Das','Suparno Saha','Mohikshit Ghorai']
    },
    {
      slNo:9,
      teamName: 'FakeFinders',
      members: ['Apratim Haldar','Srijit Chakraborty','Adrija Ghosh']
    },
    {
      slNo:10,
      teamName: 'ThermoTech',
      members: ['Hritwika Roy','Debasmita Chaterjee','Debdutta Ghosh']
    },
    {
      slNo:11,
      teamName: 'Geek Gurdians',
      members: ['Tuheena Bose','Dibvyanshi Srivastava','Debdutta Ghosh']
    },
    {
      slNo:12,
      teamName: 'VideHack',
      members: ['Neelkalpa Majumder','Harsh Prakash','Souradipta Saha']
    },
    {
      slNo:13,
      teamName: 'OmiCode',
      members: ['Soumyadip Roy','Anindita Pal','Anyanyo Dasgupta']
    },
    {
      slNo:14,
      teamName: 'MedXPress',
      members: ['Avik Agarwala','Rajdeep Banerjee','Sneha Roy']
    },
    {
      slNo:15,
      teamName: 'The Debuggers',
      members: ['Srinjoy Pramanik','MD Musharaff','Mayuk Bhowmik']
    },
    {
      slNo:16,
      teamName: 'TrackMate',
      members: ['Alik Agarwala','Prantika Ghosh','Prajakta Ghosh']
    },
    {
      slNo:17,
      teamName: 'Aragya',
      members: ['Aratrika Shome','Sandipan Dubey','Soham Aich']
    },
    {
      slNo:18,
      teamName: 'Axios',
      members: ['Srija Adhya','Pritam Kundu','Soham Aich']
    },
    {
      slNo:19,
      teamName: '404 Solvers',
      members: ['Soumyajit Ghosh','Tapendu Biswas','Sagnik Bhattacharaya']
    },
    {
      slNo:20,
      teamName: 'Code 202 Lab',
      members: ['Nikita Prasad','Rohan Shaw']
    },
    
  ];
}
