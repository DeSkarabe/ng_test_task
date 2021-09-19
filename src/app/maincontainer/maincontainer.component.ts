import { Component, OnInit } from '@angular/core';
import { GetCategoriesService } from '../get-categories.service';
import { GetPostsService } from '../get-posts.service';
import {Post, Category } from '../commontypes';


@Component({
  selector: 'app-maincontainer',
  templateUrl: './maincontainer.component.html',
  styleUrls: ['./maincontainer.component.scss']
})
export class MaincontainerComponent implements OnInit {

  posts: Post[] = new Array<Post>();
  displayPosts: Post[] = new Array<Post>();
  categories: Category[] = new Array<Category>();
  constructor(private ps:GetPostsService, private cs:GetCategoriesService) { }

  async ngOnInit(): Promise<void> {
    this.categories = await this.cs.getCategories();
    this.posts = await this.ps.getPosts();
    this.displayPosts = this.posts.map((post: Post) => {
      const cName = this.categories.find((c: Category) => c.id === post.category)?.name;
      post.category = cName;
      return post;
    });
  }
  
  onSelected(categoryName: string) {
    this.displayPosts = this.posts.filter((post:Post) => (post.category as string) === categoryName);
  }

}
