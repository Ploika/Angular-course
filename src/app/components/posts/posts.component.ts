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
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.fetchService.getCurrentPosts(this.userId).subscribe(value => this.posts = value)
    this.postService.getPosts().subscribe(value => {this.posts = value})
  }

}
