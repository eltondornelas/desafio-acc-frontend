import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs/Observable';
import { TaskItem } from '../model/task-item';

@Injectable()
export class TaskService {

  private tasksUrl: string;
  private itemUrl = '/itens/'

  constructor(private http: HttpClient) {
    this.tasksUrl = 'http://localhost:8082/tarefas/';
  }

  public findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  public save(task: Task) {
    return this.http.post<Task>(this.tasksUrl, task);
  }

  public saveItem(id: string, taskItem: TaskItem) {
    //console.log('Cheguei no saveItem');
    //console.log(taskItem);
    //console.log(this.tasksUrl + id + this.itemUrl);
    return this.http.post<TaskItem>(this.tasksUrl + id + this.itemUrl, taskItem);
  }

}
