import { Injectable } from '@angular/core';
import { TaskList } from '../modules/home/model/task-list';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private list: TaskList[] = JSON.parse(localStorage.getItem('taskList') ?? '[]');
  constructor() { }

  public productList(): TaskList[] {
    return this.list;
  }
  public setEmitTaskList(event:string){
    this.list.push({task: event, checked: false})
  };

  public deleteItem(event: number) {
    this.list.splice(event,1);
  }

  public setLocalStorage(){
    if(this.list){
      this.list.sort((first, last)=> Number(first.checked) - Number(last.checked));
      localStorage.setItem('taskList',JSON.stringify(this.list));
    }
  }
  public deleteAll() {
    const confirm = window.confirm("Você realmente deseja apagar todos?");
    if (confirm) this.list = [];
  }
  public validationInput(event:string, index: number) {
    if(!event.length) {
      const confirm = window.confirm("Produto vazio, deseja deletar?")
      if (confirm) this.deleteItem(index);
    }
  }
}
