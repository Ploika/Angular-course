import { IPost } from 'src/app/models/Post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolvePostsService implements Resolve<any[]> {

  constructor(private httpClient: HttpClient) { }
  resolve(){
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
