import { Component, OnInit,Input} from '@angular/core';
//import {CdkDropList} from '@angular/cdk';
import * as faker from 'faker';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {
  doneList = [];

  @Input('connectedTo')
  connectedTo: string[]
  constructor() {
    this.doneList = Array.from({ length: 5 }).map(() => faker.hacker.phrase())
  }

  drop(event: CdkDragDrop<string[]>) {
    // console.log(event)
    if (event.previousContainer.id === event.container.id) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  ngOnInit() {
  }

}