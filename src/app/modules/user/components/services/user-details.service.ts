import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from 'src/app/models/post';


@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
 private detailsUrl = 'http://jsonplaceholder.typicode.com/posts?userId='
  constructor(private httpClient: HttpClient) { }
  getDetailsUser(id: number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.detailsUrl + id)
  }
}
