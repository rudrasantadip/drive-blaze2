import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TwoMember } from 'src/app/dtos';
import { FileService } from 'src/app/services/file.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  paymentSS:File;

  formData={
    leaderEmail:'',
    leaderMobile:'',
    leaderFullName:'',
    leaderCollegeName:'',
    leaderDept:'',
    leaderEnrollment:'',
    memberEmail:'',
    memberMobile:'',
    memberFullName:'',
    memberCollegeName:'',
    memberDept:'',
    memberEnrollment:'',
    paymentId:'',
    paymentUrl:'',
    consent:''
  }

  constructor(private fileService:FileService,
    private formService:FormService
  )
  {

  }

  mobile:string;
    // Handle form submission

    onSubmit(form:NgForm) {
      const payment = new FormData();
      const googleForm = new FormData();
        payment.append('file',this.paymentSS)

        // upload the payment screenshot and get the link
        this.fileService.uploadFile(payment)
        .subscribe(
          (response)=>{            
            this.formData.paymentUrl=response.file;

            //set form data for google form
            googleForm.append('entry.1285609023',form.value.leaderEmail);
            googleForm.append('entry.4602624',form.value.leaderFullName);
            googleForm.append('entry.366027435',form.value.leaderMobile);
            googleForm.append(' entry.1814496164',form.value.leaderCollegeName);
            googleForm.append(' entry.725656889',form.value.leaderEnrollment);
            googleForm.append('entry.689553160',form.value.leaderDept);
            googleForm.append('entry.911783533',form.value.consent)
            googleForm.append(' entry.1448786247',this.formData.paymentUrl);
           
            this.formService.submitGoogleForm(googleForm)
            .subscribe(
              (response)=>{
                console.log(response);
              }
            )
          });
      // Add your form submission logic here
    }
  
    // Handle file input change
    onFileChange(event: any) {
      let file:File = event.target.files[0];
      this.paymentSS=file;
      if (file && this.isValidFileType(file)) {
        alert('File uploaded successfully')
      }
      else{
        file=null;
        alert('Allowed Formats: .pdf, .jpeg, .jpg, .png ');
      }
    }

 

    // checks file validity
    isValidFileType(file: File): boolean {
      const validFileTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      return validFileTypes.includes(file.type);
    }

    // checks mobile validity
    isValidMobileNumber(mobileNumber: string): boolean {
      const mobileNumberPattern = /^[6-9]\d{9}$/;
      return mobileNumberPattern.test(mobileNumber);
    }
}
