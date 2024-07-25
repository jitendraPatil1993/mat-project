import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-select-section',
  templateUrl: './select-section.component.html',
  styleUrl: './select-section.component.css'
})
export class SelectSectionComponent {
  disableSelect = new FormControl(false);
}
