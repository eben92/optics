import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task: Task | null = null;
  @Output() onDeleteTask: EventEmitter<Task | null> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task | null> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: Task | null) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task | null) {
    this.onToggleReminder.emit(task);
  }
}
