import { ActivatedRoute } from '@angular/router';
import { IPost } from './../../models/Post';
import { Component, Input, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  userId: number;

  posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.data)
   }

  ngOnInit(): void {

  }

}
