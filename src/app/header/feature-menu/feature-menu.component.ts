import { Component } from '@angular/core';
import { FeatureButtonComponent } from '../../shared/feature-button/feature-button.component';

@Component({
  selector: 'app-feature-menu',
  standalone: true,
  imports: [
    FeatureButtonComponent
  ],
  templateUrl: './feature-menu.component.html',
  styleUrl: './feature-menu.component.scss'
})
export class FeatureMenuComponent {

}
