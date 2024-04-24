import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})



export class ImprintComponent {
constructor(private translateService: TranslateService) { }

mail:string = "kontakt@raphael-fichtinger.com"
switchLanguage() {
  if (this.translateService.currentLang == "de") {
    this.translateService.use('en');
  } else {
    this.translateService.use('de');
  }
}

}