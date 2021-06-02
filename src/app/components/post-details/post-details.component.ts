import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      const statePosts =this.router.getCurrentNavigation()?.extras.state as IPost
      if(statePosts){
        this.post = statePosts
      }else {
        this.postService.getCurrentPosts(params.id).subscribe(value => this.post = value)
      }
    })
   }

  ngOnInit(): void {
  }

}
