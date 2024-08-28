
export interface Coordinator{
    name:string;
    mobile:string;
}

export interface DriveEvent
{
    name:string;
    image:string;
    routerLink:string;
    info:string;
    rules:string[];
    coordinators:Coordinator[]
}
