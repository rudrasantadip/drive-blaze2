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
    this.router.navigate([url]);
  }

  events: DriveEvent[] = [
    {
      name: 'Orion',
      image: '/assets/images/events/orion.jpeg',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScpLrVxG7DMXDJgBAMg0JPFw_SfFo7b3Oaqu9S_q4E_e3IDXA/viewform',
      // https://docs.google.com/forms/d/e/1FAIpQLScpLrVxG7DMXDJgBAMg0JPFw_SfFo7b3Oaqu9S_q4E_e3IDXA/viewform,
      info: `ORION is an exhilarating web development challenge designed for passionate web developers eager to showcase their skills. Whether you're working solo or with a partner, this contest offers the perfect platform to create a fully functional website within a limited time frame. With cash prizes of ₹5,000 for the winner, ₹3,000 for the runner-up, and ₹2,000 for third place, ORION not only rewards your creativity but also provides valuable networking opportunities and industry recognition. Join ORION, push your boundaries, and stand out in the web development community!`,
      rules: [
        'ONLY THE TEAM LEADER WILL BE FILLING THE REGISTRATION FORM.',
        'PARTICIPANTS WHO ARE REGISTERED AS MEMBERS NEED NOT FILL THE FORM.',
        'DURING THE EVENT, EVERYONE IS REQUESTED TO BRING THEIR OWN LAPTOPS FOR CONVENIENCE.',
        'THERE WILL BE TWO ROUNDS',
        'Round 1 DEV QUIZ',
        'TOPICS TO BE COVERED: WEB OPTIMIZATION, BROWSER CONCEPTS, BASIC WEB DEV CONCEPTS, RECENT TECHNOLOGIES',
        'NUMBER OF QUESTIONS 25',
        'TIME LIMIT: 30 MINUTES',
        'SELECTION ROUND',
        ' TEAMS SELECTED IN ROUND 1 SHALL BE QUALIFIED FOR ROUND 2.',
        'PARTICIPANTS HAVE TO BUILD A BASIC LANDING PAGE WITH THEIR OWN CREATIVITY',
        ' TOPICS WILL BE PROVIDED ON THE DAY OF THE EVENT',
        ' THEY CAN USE THEIR OWN DESIGN AND CREATIVITY AT THE FULLEST',
        'MARKS WILL BE ALLOTED ON THE BASIS OF CREATIVITY, DESIGN, BROWSER OPTIMIZATION, FILE STRUCTURE, CODE QUALITY',
        'Visit the form to view all the rules...',
      ],
      coordinators: [
        {
          name: 'Samadrita Bhattacharaya',
          mobile: '8017264492',
        },
        {
          name: 'Arnabh Sinha',
          mobile: '8240341374',
        },
      ],
    },
    {
      name: 'Tech Titan Takedown',

      image: '/assets/images/events/techtitantakedown.jpg',

      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSfmtKZoc6RpSX3bNhTB293Tvx_rHN0iFKzRDgfQ-u5kDmYrkg/viewform',

      info: `Tech Titan Takedown is a thrilling cybersecurity event organized by
          Drive Blaze, designed to challenge and enhance your skills in
          defending and attacking digital systems. In this high-stakes
          competition, participants will take on the roles of attackers and
          defenders, simulating real-world cyber warfare scenarios. This event
          is not just a test of your technical abilities but also a unique
          opportunity to learn cutting-edge techniques from peers and experts in
          the field. Whether you are a seasoned professional or an enthusiastic
          beginner, participating in Tech Titan Takedown will significantly
          boost your cybersecurity knowledge, improve your problem-solving
          skills, and provide invaluable experience in tackling complex
          challenges. With a prize pool of ₹10,000 for the first place, ₹8,000
          for the second, and ₹6,000 for the third, there's more than just pride
          at stake. Join us and prove that you have what it takes to be a true
          cybersecurity titan!`,

      rules: [
        'ELIGIBILITY: UNIVERSITY STUDENTS, AND CYBER SEQURITY PRACTIONERS CAN PARTICIPATE',
        'TEAM COMPOSITION: THIS IS A SOLO PARTICIPATION EVENT',
        'ETHICAL CONDUCT: EVERY PARTICIPANT IS EXPECTED TO FOLLOW THE CODE OF CONDUCT AND TO PROHIBIT THEMSELVES FROM ANY KIND OF MALICIOUS BEHAVIOUR, AND UNAUTHORIZED ACCESS TO SYSTEMS OUTSIDE THE COMPEDITION',
        'ENVIRONMENT: PARTICIPANTS ARE ALLOWED TO PERFORM THEIR ACTIVITIES ONLY ON THE DESIGNATED SERVER DESIGNED FOR THE VERY PURPOSE OF THE EVENT.',
        'TOOLS USAGE : ANY TOOLS SUCH AS AUTOMATION EXPLOITATION FRAMEWORKS IS DISCOURAGED. (AUTOSPLOIT, METASPLOIT AUTO PWN,ETC)',
        'USAGE OF PRECONFIGURED MALWARES & DDOS TOOLS IS STRICTLY PROHIBITED AND WILL LEAD TO IMMEDIATE DISQUALIFICATION',
        'INCASE OF ANY CUSTOM BUILD TOOLS, PLEASE LET THE ORGANIZERS TO PERFORM A VERIFICATION, FOR SEQURITY REASONS',
        'THE ACTIONS OF A PARTICIPANT MIGHT BE LOGGED FOR SEQURITY AND AUDITING PURPOSES.',
        'CHALLANGES & FORMATS : WILL BE BRIEFED TO THE REGISTERED PARTICIPANTS',
      ],
      coordinators: [
        {
          name: 'Santadip Rudra',
          mobile: '7044522841',
        },

        {
          name: 'Anuran Bhowmik',
          mobile: '9002245776',
        },
      ],
    },
    {
      name: 'Tech For Eye',
      image: '/assets/images/events/photo.jpg',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScR5QMA9nB1gEJr5cqva78sqGamfJPRzUvYFHdNdK6R2Me_KQ/viewform',
      // https://docs.google.com/forms/d/e/1FAIpQLScR5QMA9nB1gEJr5cqva78sqGamfJPRzUvYFHdNdK6R2Me_KQ/viewform
      rules: [
        'ELIGIBILITY: STUDENTS ACROSS ALL UNIVERSITIES & COLLEGES CAN PARTICIPATE.',
        'TEAM COMPOSITION: THIS IS A SOLO PARTICIPATION EVENT.',
        'THEME: PARTICIPANTS ARE ADVISED TO STRICTLY KEEP THEIR PHOTOGRAPHS SUCH THAT THEY DEPICT SOME FORM OF TECHNOLOGY ( IT CAN BE MECHANICAL, CYBER, ETC)',
        'UPLOADS: EACH PARTICIPANT IS ALLOWED TO UPLOAD A MAXIMUM OF 3 OF THEIR BEST PHOTOGRAPHS.',
        'FORMAT: <FIRSTNAME>_<LAST_NAME>_<PHOTO>_<NUMBER>',
        'EXAMPLE: JHON_DOE_PHOTO_1 , JHON_DOE_PHOTO_2, ETC',
        'IN CASE MORE THAN 3 PHOTGRAPHS ARE UPLOADED , THE FIRST 3 WILL BE CONSIDERED.',
        'DEADLINE: 11:00 AM IST, 28TH SEPTEMBER 2024',
      ],
      coordinators: [
        {
          name: 'Will be updated',
          mobile: 'Will be updated',
        },
      ],
      info: `TechForAnEye is an exciting tech photography contest that challenges you to capture the essence of modern and upcoming technologies through your lens. Whether you're an amateur or a seasoned photographer, this competition invites you to showcase your creativity by taking stunning photos that highlight the innovation and beauty of technology. With a prize pool of ₹1,500 for the first place, ₹1,300 for the second, and ₹700 for the third, TechForAnEye offers not only the chance to win but also an opportunity to gain recognition in the tech and photography communities. Join us, and let your photography skills shine in capturing the future of technology!`,
    },
    {
      name: 'Yukti Yagna',
      image: '/assets/images/events/yuktiyagna.jpg',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLScPTJHWvW2143YlatEuHfTX1OgreIMgtniYsMTf31jglawK-Q/viewform',
      rules: [
        'ONLY ONE PERSON SHOULD FILL UP THE FORM, WHO IS DESIGNATED TO BE THE LEADER.',
        'SOLO PARTICIPATION IS ALLOWED AND A MAXIMUM OF TWO MEMBERS IS ALLOWED.',
        'PLEASE BE SURE TO FILL UP CORRECT INFORMATION, AS IT WILL BE REQUIRED FOR FUTURE REFERENCE.',
        'IN CASE ONLY A SINGLE PARTICIPANT REGISTERS, HE/SHE WOULD BE THE LEADER',
        'PARTICIPANTS ARE ADVISED TO HAVE A TECHNICAL BACKGROUND, AS THE FUNDAMENTAL THEME OF THE QUIZ REVOLVES AROUND TECHNOLOGY.',
        'INFORMATION SUCH AS NUMBER OF ROUNDS, SHALL BE UPDATED SOON.',
      ],
      coordinators: [
        {
          name: 'Subhajit Dutta',
          mobile: '85838 33292',
        },
        {
          name: 'Santadip Rudra',
          mobile: '7044522841',
        },
      ],
      info: `Yuktitagna is an engaging technical quiz competition designed specifically for school students with a passion for science and technology. This exciting contest challenges young minds to test their knowledge and quick thinking in a competitive yet fun environment. Participating in Yuktitagna offers students the opportunity to sharpen their problem-solving skills, enhance their understanding of technical concepts, and gain valuable experience in quiz competitions. With a prize pool of ₹500 for the first place, ₹300 for the second, and ₹200 for the third, Yuktitagna not only rewards intellectual prowess but also encourages a spirit of learning and discovery. Join Yuktitagna and take your first step towards becoming a tech-savvy leader of tomorrow!`,
    },
    {
      name: 'ScriptGrid',
      image: '/assets/images/events/scriptgrid.jpg',
      routerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScjSJk76cP-syShCh4E9uFJxNuYXY9q4DAoUifantUeuwwk1g/viewform',
      rules: [],
      coordinators: [
        {
          name: 'Diptadip Biswas',
          mobile: '83482 84337',
        },
        {
          name: 'Sayan Ghosh',
          mobile: '98324 54018',
        },
      ],
      info: `ScriptGrid is an exhilarating online coding contest that invites developers of all levels to test their coding skills and creativity. In this competitive environment, participants will tackle challenging problems that push the boundaries of logic and algorithmic thinking. The perks of joining ScriptGrid are immense: you'll sharpen your problem-solving abilities, compete with peers from across the globe, and gain valuable experience in a high-pressure coding environment. Beyond the thrill of competition, participants also stand a chance to win amazing gifts and exclusive swags, making ScriptGrid not just a contest, but a celebration of coding excellence. Join ScriptGrid and code your way to victory!`,
    },
    {
      name: 'StackD',
      image: '/assets/images/events/workshop.png',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSeRJQcub1omqriDFuRbFWcXd2SOocWsJiIOsXJWThXDy5RFQQ/viewform',
      rules: [
        'ELIGIBILITY:- STUDENTS ACROSS ALL COLLEGES AND UNIVERSITIES ( ENROLLED IN ANY TECHNICAL COURSE, OR IS PERSONALLY INTERESTED IN THE TECHNOLOGY).',
        'SEATING WILL BE PROVIDED ON FIRST COME FIRST SERVE BASIS.',
        'VENUE: UNIVERSITY OF ENGINEERING & MANAGEMENT, KOLKATA (FICCI AUDITORIUM).',
        'PARTICIPANTS WILL BE REWARDED WITH PARTICIPATION CERTIFICATES & SWAGS.',
        'TOPIC: FULL STACK WEB DEVELOPMENT USING NODEJS AND RELATED FRAMEWORKS.',
        'SPEAKERS:- EXPERIENCED INDUSTRY EXPERTS.',
      ],
      coordinators: [
        {
          name: 'Pratyay Chaterjee',
          mobile: '8918389523',
        },
      ],
      info: `StackD is an immersive offline workshop focused on full-stack web development, designed to equip participants with hands-on experience and industry insights. Join StackD to learn the latest web technologies, build practical projects, and enhance your coding skills under the guidance of expert instructors. Perks include exclusive swags, a comprehensive learning experience, and a certificate of completion that adds value to your professional profile. Don’t miss this opportunity to dive deep into full-stack development and connect with like-minded enthusiasts!`,
    },
    {
      name: 'Tech Talks',
      image: '/assets/images/events/techtalks.png',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSfFhdtcJ0Y8FsWD5gFVnZQnf1ZuTgbHrPKUhqu9nrR259yL6g/viewform',
      rules: [
        'PLEASE ENSURE THE PROPER PAYMENT CREDENTIALS ARE UPLOADED.',
        'DOUBLE CHECK YOUR PERSONAL INFORMATION SUCH AS EMAIL, MOBILE NUMBER AS THAT WOULD BE ESSENTIAL FOR ESTABLISHING FURTHER CONTACT.',
        'SEATING WILL BE ON FIRST COME FIRST SERVE BASIS.'
      ],
      coordinators: [
        {
          name: 'Pratyay Chaterjee',
          mobile: '8918389523',
        },
        {
          name:'Anuja Roy',
          mobile:'9007811583'
        }
      ],
      info: `Join us for an exclusive technical talk session featuring CEOs and CTOs from leading organizations. These industry pioneers will delve into the latest technological trends, offering insights into the innovations shaping our future. They will also share personal stories from their journeys, providing a unique perspective on balancing the demands of leadership with the fast-paced world of technology. This session is a rare opportunity to learn from the experiences of those at the forefront of the industry. Don't miss out!  `,
    },
    {
      name: 'CeleBharat',
      image: '/assets/images/events/celebharat.jpg',
      routerLink:
        'https://docs.google.com/forms/d/e/1FAIpQLSdMfQ2ntYK1d5H_NIodkLsiszbzGXqlouPC9Wu9pynW26AT9w/viewform',
      rules: [
        'Each startup must provide their valid POB (Proof Of Business).',
        'Established Businesses must provide their Business Trade  License No Business Registration Number',
        'Every startup is requested to produce a presentation which gives a through briefing of the former, its proposition and aim.',
        ' Please provide an estimate of your current funding status, and the amount of money you expect to be raised.',
        'Every startup can bring a minimum of 1 to maximum of 4 members.',
      ],
      coordinators: [
        {
          name: 'Pratyay Chaterjee',
          mobile: '8918389523',
        },
      ],
      info: `CeleBharat is an exclusive event designed to bring together innovative startups and potential investors in a dynamic, setting at our university premise. At CeleBharat, startups have the unique opportunity to showcase their groundbreaking ideas and business models directly to a curated group of investors seeking the next big opportunity.
This event provides a platform for startups to pitch their visions, demonstrate their traction, and articulate their investment needs. With a focus on fostering meaningful connections, CeleBharat offers startups valuable exposure to investors who are passionate about supporting and scaling innovative ventures.`,
    },
  ];

  gotoComponent(url: string, event: any) {
    const jsonString = JSON.stringify(event.coordinators); //converting the json to string
    const encodedData = encodeURIComponent(jsonString);

    this.router.navigate([url], {
      queryParams: {
        name: btoa(event.name),
        image: btoa(event.image),
        info: event.info,
        routerLink: btoa(event.routerLink),
        rules: btoa(JSON.stringify(event.rules)),
        coordinators: encodedData,
      },
    });
  }
}
