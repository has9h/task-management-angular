import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {

  // public property for tasks
  public tasks : any;
  constructor(private service : TaskService, private router: Router) { }

  ngOnInit(): void {
    this.getTasks();
  }

  toEdit = (id : any) => {
    this.router.navigateByUrl(`/edit/${id}`);
  };

  toDelete = (id : any) => {
    this.service.deleteTask(id).subscribe(result => {
      alert(`Successfully deleted id ${id}`);

      // calling second GET request 
      this.getTasks();
    });
  };

  // subscribe to get value
  private getTasks(): void {
    this.service.getTasks().subscribe(result => {
      this.tasks = result.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
    });
  }
}
