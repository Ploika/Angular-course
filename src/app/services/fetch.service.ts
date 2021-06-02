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

  constructor(private httpClient: HttpClient) {

  }

  getUsers(): Observable<IUser[]>{
    return  this.httpClient.get<IUser[]>(this.urlUsers)
  }
  getCurrentUSEr(id: number): Observable<IUser>{
    return this.httpClient.get<IUser>(this.urlUsers + "/" + id)
  }

}
