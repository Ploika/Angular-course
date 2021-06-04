import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
 private detailsUrl = 'http://jsonplaceholder.typicode.com/posts?userId='
  constructor(private httpClient: HttpClient) { }
  getDetailsUser(id: number): Observable<any[]>{
    return this.httpClient.get<any[]>(this.detailsUrl+ id)
  }
}
