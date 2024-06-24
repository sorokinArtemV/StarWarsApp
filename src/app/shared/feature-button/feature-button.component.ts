import { Component } from '@angular/core';

@Component({
  selector: 'button[appFeatureButton]',
  standalone: true,
  imports: [],
  templateUrl: './feature-button.component.html',
  styleUrl: './feature-button.component.scss',
  host: {
    'class': 'feature-menu__button feature-menu-button button button--transparent'
  }
})
export class FeatureButtonComponent {

}
