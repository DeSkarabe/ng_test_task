import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../commontypes';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() posts: Post[] = [];
  sortedBy: string = "unsorted";
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Handle sorting
   * @param dirrection - 0 means DSC, 1 means ASC
   */
  changeSort(dirrection: number): void {
    if(dirrection === 0) {
      this.posts = this.posts.sort((a: Post, b: Post) => {
        if(a.createdAt > b.createdAt) {
          return -1;
        } else {
          return 0;
        }
        });
        this.sortedBy = "Sorted by DSC";
    } else {
      this.posts = this.posts.sort((a: Post, b: Post) => {
        if(a.createdAt < b.createdAt) {
          return -1;
        } else {
          return 0;
        }
        });
        this.sortedBy = "Sorted by ASC";
    }
  }
  
}
