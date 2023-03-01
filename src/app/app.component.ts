import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularToDo';

  tasks:Todo[] =
  [
    {
      task: "Laundry",
      completed: true
    },
    {
      task: "Air Tires",
      completed: false
    },
    {
      task: "Replace Water Heater",
      completed: true
    },
    {
      task: "Fix Trim",
      completed: false
    },
    {
      task: "Wash Dog",
      completed: true
    },
    {
      task: "Recycle Boxes",
      completed: false
    },
    {
      task: "Organize Shoes",
      completed: true
    },
    {
      task: "Airdust PC",
      completed: false
    },
    {
      task: "Clear Out Fridge",
      completed: true
    },
    {
      task: "Clean Room",
      completed: false
    },
    {
      task: "Make Dinner",
      completed: true
    },
    {
      task: "Unload Dishwasher",
      completed: false
    },
  ];

 newTask:string= "";
 filter:string = "";

  addTask() :void
  {
    let result:Todo = 
    {
      task: this.newTask,
      completed: false,
    }
    this.tasks.push(result);    
  }

  removeTask(index:number):void 
  {
    this.tasks.splice(index,1)
  }

  CompleteTask(index:number):void{
    this.tasks[this.getCorrectIndex(index)].completed = true;
  }
  
  IsCompleted():boolean 
  {
    if(this.tasks.length ==0) 
    {
      return true;
    }

    let result : boolean = true;
    this.tasks.forEach((t:Todo) =>
    {
      if(t.completed == false)
      {
        result =false;
      }
    });
    return result;
  }

  getFiltered():Todo[]{
    return this.tasks.filter((t:Todo) => t.task.includes(this.filter));
  }

  getCorrectIndex(index:number):number{
    //index is filtered, we need the original
    let task:Todo = this.getFiltered()[index];

    return this.tasks.findIndex((t:Todo) => t.task == task.task && t.completed == task.completed);
  }

}
