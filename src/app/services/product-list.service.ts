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
}
