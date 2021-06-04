import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlPosts = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.urlPosts)
  }
}
