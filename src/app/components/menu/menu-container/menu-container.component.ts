import { Component, Input } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'todolist-menu-container',
  standalone: true,
  imports: [MenuItemComponent],
  templateUrl: './menu-container.component.html',
})
export class MenuContainerComponent {
  @Input() selectedTab = 0;
}
