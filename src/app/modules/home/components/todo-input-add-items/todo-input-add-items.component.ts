import { Component, EventEmitter, Output } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  public faCart = faShoppingCart;
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList = "";

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim();
    if(this.addItemTaskList) this.emitItemTaskList.emit(this.addItemTaskList);
    this.addItemTaskList = "";
  }
}
