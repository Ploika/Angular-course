import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  // private currentUrlPosts = 'http://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private httpClient: HttpClient) {

  }
  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.urlPosts);
  }
  getCurrentPosts(id: any): Observable<IPost>{
    // return this.httpClient.get<IPost[]>(`${this.currentUrlPosts}${id}`);
    return this.httpClient.get<IPost>(this.urlPosts + '/' + id)
  }
}
