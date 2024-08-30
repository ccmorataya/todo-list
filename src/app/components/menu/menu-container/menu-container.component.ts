import { Component, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'todolist-menu-container',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu-container.component.html',
  styleUrl: './menu-container.component.scss',
})
export class MenuContainerComponent {
  @Input() selectedTab = 0;
}
