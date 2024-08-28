import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DriveEvent } from '../dto';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.css'],
})
export class ContestsComponent {
  constructor(private router: Router) {}

  goto(url: string) {
    window.location.href = url;
  }

  events:DriveEvent[] = [
    {
      name: 'Orion',
      image: '/assets/images/events/comingsoon.png',
      routerLink: '',
      // https://docs.google.com/forms/d/e/1FAIpQLScpLrVxG7DMXDJgBAMg0JPFw_SfFo7b3Oaqu9S_q4E_e3IDXA/viewform
      rules: [
        "ONLY THE TEAM LEADER WILL BE FILLING THE REGISTRATION FORM.",
        "PARTICIPANTS WHO ARE REGISTERED AS MEMBERS NEED NOT FILL THE FORM.",
        "DURING THE EVENT, EVERYONE IS REQUESTED TO BRING THEIR OWN LAPTOPS FOR CONVENIENCE.",
        "THERE WILL BE TWO ROUNDS",
        "Round 1 DEV QUIZ",
        "TOPICS TO BE COVERED: WEB OPTIMIZATION, BROWSER CONCEPTS, BASIC WEB DEV CONCEPTS, RECENT TECHNOLOGIES",
        "NUMBER OF QUESTIONS 25",
        "TIME LIMIT: 30 MINUTES",
        "SELECTION ROUND",
        " TEAMS SELECTED IN ROUND 1 SHALL BE QUALIFIED FOR ROUND 2.",
        "PARTICIPANTS HAVE TO BUILD A BASIC LANDING PAGE WITH THEIR OWN CREATIVITY",
        " TOPICS WILL BE PROVIDED ON THE DAY OF THE EVENT",
        " THEY CAN USE THEIR OWN DESIGN AND CREATIVITY AT THE FULLEST",
        "MARKS WILL BE ALLOTED ON THE BASIS OF CREATIVITY, DESIGN, BROWSER OPTIMIZATION, FILE STRUCTURE, CODE QUALITY",
        "Visit the form to view all the rules..."
      ],
      coordinators: [
        {
          name:"Samadrita Bhattacharaya",
          mobile:"8017264492"
        }
        ,
        {
          name:"Arnabh Sinha",
          mobile:"8240341374"
        }
      ]
    },
    {
      name: 'Tech Titan Takedown',
      image: '/assets/images/events/techtitantakedown.jpg',
      routerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfmtKZoc6RpSX3bNhTB293Tvx_rHN0iFKzRDgfQ-u5kDmYrkg/viewform',
      rules: [
          "ELIGIBILITY: UNIVERSITY STUDENTS, AND CYBER SEQURITY PRACTIONERS CAN PARTICIPATE",
          "TEAM COMPOSITION: THIS IS A SOLO PARTICIPATION EVENT",
          "ETHICAL CONDUCT: EVERY PARTICIPANT IS EXPECTED TO FOLLOW THE CODE OF CONDUCT AND TO PROHIBIT THEMSELVES FROM ANY KIND OF MALICIOUS BEHAVIOUR, AND UNAUTHORIZED ACCESS TO SYSTEMS OUTSIDE THE COMPEDITION",
          "ENVIRONMENT: PARTICIPANTS ARE ALLOWED TO PERFORM THEIR ACTIVITIES ONLY ON THE DESIGNATED SERVER DESIGNED FOR THE VERY PURPOSE OF THE EVENT.",
          "TOOLS USAGE : ANY TOOLS SUCH AS AUTOMATION EXPLOITATION FRAMEWORKS IS DISCOURAGED. (AUTOSPLOIT, METASPLOIT AUTO PWN,ETC)",
          "USAGE OF PRECONFIGURED MALWARES & DDOS TOOLS IS STRICTLY PROHIBITED AND WILL LEAD TO IMMEDIATE DISQUALIFICATION",
          "INCASE OF ANY CUSTOM BUILD TOOLS, PLEASE LET THE ORGANIZERS TO PERFORM A VERIFICATION, FOR SEQURITY REASONS",
          "THE ACTIONS OF A PARTICIPANT MIGHT BE LOGGED FOR SEQURITY AND AUDITING PURPOSES.",
          "CHALLANGES & FORMATS : WILL BE BRIEFED TO THE REGISTERED PARTICIPANTS"
      ],
      coordinators: [
        {
          name:"Santadip Rudra",
          mobile:"7044522841"
        }
        ,
        {
          name:"Anuran Bhowmik",
          mobile:"9002245776"
        }
      ]
    },
    {
      name: 'Tech For Eye',
      image: '/assets/images/events/comingsoon.png',
      routerLink: '',
      // https://docs.google.com/forms/d/e/1FAIpQLScR5QMA9nB1gEJr5cqva78sqGamfJPRzUvYFHdNdK6R2Me_KQ/viewform
      rules: [],
      coordinators: []
    },
    {
      name: 'Yukti Yagna',
      image: '/assets/images/events/comingsoon.png',
      routerLink: '',
      // https://docs.google.com/forms/d/e/1FAIpQLScPTJHWvW2143YlatEuHfTX1OgreIMgtniYsMTf31jglawK-Q/viewform
      rules: [],
      coordinators: []
    },
    {
      name: 'Algo Arcade', image: '/assets/images/events/comingsoon.png', routerLink: '',
      rules: [],
      coordinators: []
    },
  ];

  
  gotoComponent(url:string,event:any)
  {

    const jsonString = JSON.stringify(event.coordinators); //converting the json to string
    const encodedData = encodeURIComponent(jsonString);

    this.router.navigate([url],{queryParams:
      {
        name:btoa(event.name),
        image:btoa(event.image),
        routerLink:btoa(event.routerLink),
        rules:btoa(JSON.stringify(event.rules)),
        coordinators:encodedData
      }
    });
  }

}
