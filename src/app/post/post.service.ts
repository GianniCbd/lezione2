import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'assets/db.json';
  private posts: Post[] = [];

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  updatePost(updatedPost: Post): Observable<void> {
    const index = this.posts.findIndex((posts) => posts.id === updatedPost.id);

    if (index !== -1) {
      this.posts[index] = updatedPost;
    }

    return of(undefined);
  }
}
