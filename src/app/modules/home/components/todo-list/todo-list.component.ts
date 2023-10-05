import { Component, DoCheck } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TaskList } from '../../model/task-list';
import { ProductListService } from '../../../../services/product-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public faTrash = faTrashCan;
  public tasks: TaskList[]= [];

  constructor(private listService: ProductListService) {
    this.tasks = listService.productList();
  }
  ngDoCheck(): void {
    this.listService.setLocalStorage();
  }
  public setEmitTaskList = this.listService.setEmitTaskList;
  public validationInput = this.listService.validationInput;
  public deleteItem = this.listService.deleteItem;
  public deleteAll = this.listService.deleteAll;

}
