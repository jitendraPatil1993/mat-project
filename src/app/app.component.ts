import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

import {ChangeDetectionStrategy, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mat-project';
  message = new FormControl('Info about the action');
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
}
