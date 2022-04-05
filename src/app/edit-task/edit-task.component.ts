import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})

export class EditTaskComponent implements OnInit {
  // Escape hatch to add definite assignment assertion
  public taskForm!: FormGroup;
  public id : any;
  public data : any;
  public status! : Number;
  constructor(private formBuilder : FormBuilder, private service : TaskService, private route : Router, private router : ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.getTaskById();
  }
  
  public editTask() : void {
    let formData = this.taskForm.value;
    
    this.service.putTask(formData, this.id).subscribe(result => {
      alert(`Task with ID ${result} has been edited`);
      this.route.navigateByUrl(`/`);
    });  
  }
  
  public radioChangeHandler(event: any){
    console.log(event.target.value);
  }

  public sliderChangeHandler(event: any){
    console.log(event.target.value)
  }

  public getTaskById() : void {
    this.service.getTaskById(this.id).subscribe(result => {
      this.data = result;
      this.init();
    });
  }
  
  private init() : void {
    console.log(this.data);
    this.taskForm = this.formBuilder.group({
      title: this.data.title,
      description: this.data.description,
      status: this.data.status,
      progress: this.data.progress,
    });
  }
}

