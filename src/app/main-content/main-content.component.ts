import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    AboutmeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent

],

  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
