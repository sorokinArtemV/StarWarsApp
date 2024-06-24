import { Component } from '@angular/core';
import { FeatureMenuComponent } from './feature-menu/feature-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FeatureMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
