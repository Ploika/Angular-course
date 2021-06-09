import { IPost } from '../../models/post';
import { Component, Input, OnInit } from '@angular/core';
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
    this.postService.getCurrentPosts(this.userId).subscribe(value => this.posts = value)
  }

}
