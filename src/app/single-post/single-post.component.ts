import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../commontypes';
import { GetPostsService } from '../get-posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  singlePost?: Post;
  constructor(private route: ActivatedRoute, private ps: GetPostsService) { }

  ngOnInit(): void {
    const postId = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);
    this.singlePost = this.ps.getPost(postId);
  }

}
