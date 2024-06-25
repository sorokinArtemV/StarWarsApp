import { Component, computed, input, output } from '@angular/core';
import { ButtonEntity } from '../../../../public/config/interfaces/button-entity.interface';

@Component({
  selector: 'button[appFeatureButton]',
  standalone: true,
  imports: [],
  templateUrl: './feature-button.component.html',
  styleUrl: './feature-button.component.scss',
  host: {
    'class': 'feature-menu__button feature-menu-button',
    '(click)': 'onSelectElement()',
    'type': 'button'
  }
})
export class FeatureButtonComponent {
  buttonEntity = input.required<ButtonEntity>();
  imagePath = computed(() => `../../images/button-icons/${this.buttonEntity().image}`);

  selectedButton = output<string>();

  onSelectElement() {
    this.selectedButton.emit(this.buttonEntity().type);
  }
}
