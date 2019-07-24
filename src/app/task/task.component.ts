import { Component, OnInit } from '@angular/core';
import { DropEvent } from 'angular-draggable-droppable';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { DatePipe } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css', './media-query.css'],

})

export class TaskComponent implements OnInit {
  globalIndex = undefined;
  showHide = false;
  showaddTask = false;
  new_task_value = undefined;
  task = []
  taskLength = this.task.length;
  constructor(public ngxSmartModalService: NgxSmartModalService,private datePipe: DatePipe) { }

  dragEnd(event, index) {
    this.showHide = false;
    this.globalIndex = index;
  }
  onDragStart(event: DragEvent) {
    this.showHide = true;
    // Hide dragged element
  }
  onDrop({ dropData }: DropEvent<string>): void {
    console.log("data drop");
    this.task.splice(this.globalIndex, 1);
    console.log(this.globalIndex);
    this.taskLength = this.task.length;

  }
  _showAddTask() {
    this.new_task_value = undefined;
    this.showaddTask = !this.showaddTask;
    this.taskLength = this.task.length;

  }
  _addTask(param) {
    if (param == undefined) {

    } else {
      console.log("Task to add");
      this.showaddTask = !this.showaddTask;
      var newDate = new Date();
      newDate.setDate(newDate.getDate() + this.task.length)
      console.log()
      this.task.push({ text: param, date: this.datePipe.transform(newDate, 'dd-M-yyyy') });
      console.log(param);
      this.taskLength = this.task.length;

    }
  }
  ngOnInit() {

    this.task = [
      { text: "Complete ten push-ups", date: '28-07-2019', completed: false },
      { text: "Party at jason's house", date: '29-07-2019', completed: false },
      { text: "interview Schedule for Mike", date: '22-07-2019', completed: true },
    ]
    this.taskLength = this.task.length;
  }

}
