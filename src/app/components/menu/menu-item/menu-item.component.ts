import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'todolist-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  @Input() title = '';
  @Input() isSelected = false;
  @Input() routerLink = '';
}
