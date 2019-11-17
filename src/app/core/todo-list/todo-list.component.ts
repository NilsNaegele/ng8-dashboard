import { Component, OnDestroy, AfterViewInit, HostBinding, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { TodoListService } from './services/todo-list.service';

import 'material-design-lite/material';

declare const componentHandler: any;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements AfterViewInit, OnDestroy {
  @HostBinding('class.todo') public readonly todo = true;

  items;
  createdItem = null;
  private todoItemsSubscription;

  @ViewChild('todoInput', { static: false }) private set todoInput(element: ElementRef) {
    if (element) {
      element.nativeElement.focus();
    }
  }
  @ViewChildren('listItem') private todoItems: QueryList<ElementRef>;

  constructor(private todoListService: TodoListService) {
    this.items = todoListService.getItems();
  }

  public ngAfterViewInit(): void {
    this.todoItemsSubscription = this.todoItems.changes.subscribe((todoItems) => {
      if (todoItems && todoItems.last) {
      componentHandler.upgradeElement(todoItems.last.nativeElement.querySelector('[checkboxitem]'));
      const textField = todoItems.last.nativeElement.querySelector('.mdl-textfield');
      if (textField) {
      componentHandler.upgradeElement(textField);
      }
      }
    });
  }

  ngOnDestroy(): void {
    this.todoItemsSubscription.unsubscribe();
  }

  deleteItem(item): void {
    this.items = this.items.filter(i => i !== item);
  }

  createItem(): void {
    this.createdItem = {
      title: '',
      id: Date.now(),
      completed: false,
    };
  }

  addItem(): void {
    if (this.createdItem.title) {
      this.items.push({ ...this.createdItem });
    }
    this.createdItem = null;
  }

  deleteCompletedItems(): void {
    this.items = this.items.filter((item: any) => !item.completed);
  }

}
