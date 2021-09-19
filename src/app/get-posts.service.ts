import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cached, Post } from './commontypes';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  cache: Cached = {posts: [], categories: []};
  constructor(private client: HttpClient, private router:Router) { }

  async getPosts(): Promise<Post[]> {
    this.cache.posts = await this.client.get<Post[]>('/assets/posts.json').toPromise<Post[]>();
    return this.cache.posts;
  }

  getPost(id: number): Post {
    if(this.cache.posts.length === 0)
    this.router.navigate(['/']);
    return this.cache.posts.filter((p: Post) => p.id === id)[0];
  }
}
