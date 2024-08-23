import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  /*
  https://docs.google.com/forms/d/e/1FAIpQLScPTJHWvW2143YlatEuHfTX1OgreIMgtniYsMTf31jglawK-Q/viewform?
  entry.1285609023=santadip9@gmail.com
  entry.4602624=Santadip+Rudra
  entry.366027435=7044522841
  entry.1814496164=UEMK
  entry.725656889=12022002023127
  entry.689553160=CSIT
  entry.911783533=123456789
  entry.1448786247=www.google.com
  entry.886238314=I+HEREBY+DECLARE+THAT+THE+ABOVE+INFORMATION+IS+CORRECT+TO+MY+KNOWLEDGE.



   *https://docs.google.com/forms/d/e/1FAIpQLScPTJHWvW2143YlatEuHfTX1OgreIMgtniYsMTf31jglawK-Q/formResponse
   entry.1285609023=santadip9@gmail.com
   entry.4602624=Santadip+Rudra
   entry.366027435=7044522841
   entry.1814496164=UEMK
   entry.725656889=12022002023127
   entry.689553160=CSIT
   entry.911783533=123456789
   entry.886238314=I+HEREBY+DECLARE+THAT+THE+ABOVE+INFORMATION+IS+CORRECT+TO+MY+KNOWLEDGE.
   */

  // private formUrl: string =
  //   'https://docs.google.com/forms/d/e/1FAIpQLScPTJHWvW2143YlatEuHfTX1OgreIMgtniYsMTf31jglawK-Q/formResponse';

  private formUrl='https://script.google.com/macros/s/AKfycbzAoPwqzXXpouDbeyD9e0ZEBpkhM65MRFJGdWK5yveqI_Ev6vKzg6EnDRu-9dQ6KJHV/exec';
  constructor(private http: HttpClient) {}

  submitGoogleForm(formData: any) {
    return this.http.post(this.formUrl, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  }
}
