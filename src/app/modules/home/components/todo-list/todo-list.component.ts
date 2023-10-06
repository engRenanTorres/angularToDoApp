import { Component, DoCheck, OnInit } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TaskList } from '../../model/task-list';
import { ProductListService } from '../../../../services/product-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck, OnInit {
  public faTrash = faTrashCan;
  public tasks: TaskList[]= [];

  constructor(private listService: ProductListService){} 
  ngOnInit(): void {
  }


  ngDoCheck(): void {
    this.setLocalStorage();
  }
  public setEmitTaskList(event:string){
    this.tasks.push({task: event, checked: false})
  };
  public validationInput(event:string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Produto vazio, deseja deletar?")
      if (confirm) this.deleteItem(index);
    }
  }
  public deleteItem(event: number) {
    this.tasks.splice(event,1);
  };
  public deleteAll() {
    const confirm = window.confirm("Você realmente deseja apagar todos?");
    if (confirm) this.tasks = [];
  }
  public setLocalStorage(){
    if(this.tasks){
      this.tasks.sort((first, last)=> Number(first.checked) - Number(last.checked));
      localStorage.setItem('tasktasks',JSON.stringify(this.tasks));
    }
  }

}
