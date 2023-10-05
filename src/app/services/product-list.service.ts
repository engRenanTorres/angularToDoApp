import { Injectable } from '@angular/core';
import { TaskList } from '../modules/home/model/task-list';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private list: TaskList[] = [{task: 'Café', checked: false }];
  constructor() { }

  public productList(): TaskList[] {
    return this.list;
  }
}
