import { IComment } from 'src/app/models/comment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {
  private urlDetails = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient: HttpClient) { }
  getPostDetails(id: number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.urlDetails + '/' + id + '/comments')
  }
}
