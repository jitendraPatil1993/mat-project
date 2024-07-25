import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-section',
  templateUrl: './badge-section.component.html',
  styleUrl: './badge-section.component.css'
})
export class BadgeSectionComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
