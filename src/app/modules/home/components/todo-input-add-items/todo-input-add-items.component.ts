import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  public faCart = faShoppingCart;
}
