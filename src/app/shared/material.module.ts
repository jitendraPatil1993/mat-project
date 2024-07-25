import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import {MatSliderModule} from '@angular/material/slider';

import {MatRadioModule} from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';


import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,   
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    
    MatChipsModule,    
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTreeModule,
    _MatSlideToggleRequiredValidatorModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    
    MatInputModule,
    MatDialogModule
    

  ],

  exports:[
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
   
    
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,    
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTreeModule,
    _MatSlideToggleRequiredValidatorModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatRadioModule,    
    MatInputModule,
    MatDialogModule
    
  ]
})
export class MaterialModule { }
