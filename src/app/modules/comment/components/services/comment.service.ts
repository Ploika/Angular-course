import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: 'https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClient: HttpClient) { }
  getComments(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.url)
  }
}

