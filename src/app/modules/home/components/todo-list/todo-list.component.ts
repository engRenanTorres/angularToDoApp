import { Component, DoCheck } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public faTrash = faTrashCan;
  public Tasks: TaskList[]= JSON.parse(localStorage.getItem('taskList') ?? '[]');
  public setEmitTaskList(event:string){
    this.Tasks.push({task: event, checked: false})
  };

  ngDoCheck(): void {
    this.setLocalStorage();
  }
  public deleteItem(event: number) {
    this.Tasks.splice(event,1);
  }
  public deleteAll() {
    const confirm = window.confirm("Você realmente deseja apagar todos?");
    if (confirm) this.Tasks = [];
  }
  public validationInput(event:string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Produto vazio, deseja deletar?")
      if (confirm) this.deleteItem(index);
    }
  }
  public setLocalStorage(){
    if(this.Tasks){
      this.Tasks.sort((first, last)=> Number(first.checked) - Number(last.checked));
      localStorage.setItem('taskList',JSON.stringify(this.Tasks));
    }
  }
}
