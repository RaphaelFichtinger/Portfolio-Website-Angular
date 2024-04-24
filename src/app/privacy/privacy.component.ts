import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  mail:string = 'kontakt@raphael-fichtinger.com'

  constructor(private translateService: TranslateService) { }
  
  switchLanguage() {
    if (this.translateService.currentLang == "en") {
      this.translateService.use('de');
    } else {
      this.translateService.use('en');
    }
  }
}
