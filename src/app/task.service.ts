import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // API path
  private basePath = 'https://localhost:44301/api/task/';
  constructor(private http: HttpClient) { }

  // GET ALL
  public getTasks() : Observable<any>{
    return this.http.get(this.basePath);
  }

  // GET BY ID
  public getTaskById(id : Number){
    return this.http.get(this.basePath + id);
  }

  // POST TASK
  public addTask(task : any) : Observable<any>{
    return this.http.post(this.basePath, task);
  }

  // PUT TASK
  public putTask(task : any, id : Number) : Observable<any>{
    return this.http.put(this.basePath + id, task);
  }

  // DELETE TASK
  public deleteTask(id : Number){
    return this.http.delete(this.basePath + id);
  }
}
