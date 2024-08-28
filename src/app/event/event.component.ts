import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Coordinator, DriveEvent } from '../dto';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit
{
gotoUrl(url:string) {
  window.location.href=url;
}

  name:string;
  image:string;
  routerLink:string;
  rules:string[];
  coordinators:Coordinator[];

  selectedSection: string = 'contact'; // Default to 'contact' section

  showSection(section: string) {
    this.selectedSection = section;
  }


  constructor(
    private activatedRoute:ActivatedRoute,
    private sanitizer:DomSanitizer
  )
  {

  }

  ngOnInit(): void 
  {
    this.activatedRoute.queryParams.subscribe(
      params=>{
        this.name=atob(params['name']);
        this.image=atob(params['image']);
        this.routerLink=atob(params['routerLink']);
        this.rules=JSON.parse(atob(params['rules']));
        const data = (params['coordinators']);
        if(data)
        {
          this.coordinators=JSON.parse(decodeURIComponent(data));
        }
      }
    )
  }



}
