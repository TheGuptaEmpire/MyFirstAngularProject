import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Delete button has been triggered');
  }

  onCheckBoxClick(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }
}
