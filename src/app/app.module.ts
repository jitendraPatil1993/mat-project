import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { MaterialModule } from './shared/material.module';
import { SelectSectionComponent } from './select-section/select-section.component';
import { ChipsSectionComponent } from './chips-section/chips-section.component';
import { BadgeSectionComponent } from './badge-section/badge-section.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TreeSectionComponent } from './tree-section/tree-section.component';
import { SlidtoggleComponent } from './slidtoggle/slidtoggle.component';
import { DialogOverviewExampleComponent } from './dialog-overview-example/dialog-overview-example.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSectionComponent,
    SelectSectionComponent,
    ChipsSectionComponent,
    BadgeSectionComponent,
    CardComponent,
    TreeSectionComponent,
    SlidtoggleComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
