import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, NgIf, CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  showMessage: boolean = false;
  privacyPolicyAgreed = false;

  constructor(private translateService: TranslateService) { }


  http = inject(HttpClient)


  contactData = {

    name: "",
    email: "",
    message: ""
  }

  mailTest = false;

  post = {
    endPoint: 'https://raphael-fichtinger.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.privacyPolicyAgreed) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.showMessage = true;
            ngForm.resetForm();

            setTimeout(() => {
              this.showMessage = false;
            }, 2000);
          },
          error: (error) => {
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  switchLanguage() {
    if (this.translateService.currentLang == "en") {
      this.translateService.use('de');
    } else {
      this.translateService.use('en');
    }
  }
}





