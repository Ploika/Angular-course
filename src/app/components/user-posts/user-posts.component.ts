import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../models/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  @Input()
  post: IPost
  constructor() { }

  ngOnInit(): void {
  }

}
