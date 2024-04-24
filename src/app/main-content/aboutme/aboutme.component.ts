import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../../scroll.service';


@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [TranslateModule, ],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})




export class AboutmeComponent {

  constructor(private translateService: TranslateService, private scrollService: ScrollService) { }


  scrollToContacts(){
    this.scrollService.scrollToElement('contact');
  }



}
