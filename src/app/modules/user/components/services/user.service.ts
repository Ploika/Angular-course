
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url);
  }
}
