import { IPost } from './../models/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private urlUsers = 'https://jsonplaceholder.typicode.com/users';
  private urlPosts = 'https://jsonplaceholder.typicode.com/posts';
  private currentUrlPosts = 'http://jsonplaceholder.typicode.com/posts?userId=';
  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]>{
    return  this.httpClient.get<IUser[]>(this.urlUsers)
  }
  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.urlPosts);
  }
  getCurrentPosts(id: number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${this.currentUrlPosts}${id}`);
  }
}
