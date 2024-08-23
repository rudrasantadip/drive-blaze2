import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    // Handle form submission
    onSubmit() {
      alert('Form submitted!');
      // Add your form submission logic here
    }
  
    // Handle file input change
    onFileChange(event: any) {
      const file = event.target.files[0];
      if (file) {
        console.log('File selected:', file.name);
        // Add your file handling logic here
      }
    }
}
