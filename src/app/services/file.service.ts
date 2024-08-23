import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl:string='http://localhost:5000/upload';

  constructor(private http:HttpClient) 
  {

  }

  uploadFile(formData:FormData):Observable<any>
  {
    return this.http.post(`${this.apiUrl}`,formData);
  }
}
