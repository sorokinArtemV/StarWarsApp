import { Component } from '@angular/core';
import { FeatureButtonComponent } from '../../shared/feature-button/feature-button.component';
import { ButtonEntityConfig } from '../../../../public/config/button-entity.config';
import { ButtonEntity } from '../../../../public/config/interfaces/button-entity.interface';

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
  buttonEntities: ButtonEntity[] = ButtonEntityConfig;

  selectedElementType ?: string;

  onSelectElement(type: string) {
    this.selectedElementType = type;
  }
}
