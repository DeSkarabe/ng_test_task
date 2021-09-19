import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../commontypes';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.scss']
})
export class CategoryNavComponent implements OnInit {
  @Input() categories: Category[] = [];
  @Output() onSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(name: string):void {
    this.onSelected.emit(name);
  }

}
