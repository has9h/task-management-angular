import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  // Escape hatch to add definite assignment assertion
  public taskForm!: FormGroup;
  constructor(private formBuilder : FormBuilder, private service : TaskService, private route : Router) { }

  ngOnInit(): void {
    this.init();
  }

  public saveTask() : void{
    let formData = this.taskForm.value;
    // formData.status = parseInt(formData.status);
    console.log(formData.status);
    
    // Subscribe to get value
    // result returns Id of item
    this.service.addTask(formData).subscribe(result => {
      alert(`New task added with ID: ${result}`);
      this.route.navigateByUrl(`/`);
    });
  }

  public taskSliderChangeHandler(event: any){
    console.log(event.target.value)
  }

  public taskRadioChangeHandler(event: any){
    console.log(event.target.value);
  }

  private init() : void {
    this.taskForm = this.formBuilder.group({
      title: [],
      description: [],
      status: [],
      progress: [],
    });
  }
}
