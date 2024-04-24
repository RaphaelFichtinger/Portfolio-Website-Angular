import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../scroll.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

constructor(private translateService: TranslateService, private scrollService: ScrollService ) {
}

  switchLanguage() {
    if (this.translateService.currentLang == "de") {
      this.translateService.use('en');
    } else {
      this.translateService.use('de');
    }
  }

  scrollToTop(): void {
    this.scrollService.scrollToElement('home');
  }

  scrollToMid(): void {
    this.scrollService.scrollToElement('skills');
  }

  scrollToProjects(){
    this.scrollService.scrollToElement('projects');
  }

}
