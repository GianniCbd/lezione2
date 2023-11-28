import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  activePosts: Post[] = [];
  constructor(private postsService: PostService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => {
      this.activePosts = posts.filter((post) => post.active);
    });
  }
}
