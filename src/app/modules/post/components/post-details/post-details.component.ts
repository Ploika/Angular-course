import { Router, ActivatedRoute } from '@angular/router';
import { IComment } from 'src/app/models/comment';
import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from '../services/post-details.service';
import { IPost } from 'src/app/models/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost
  currentPostDetails: IComment[]
  constructor(private postDetails: PostDetailsService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.router.getCurrentNavigation()?.extras.state as IPost
      this.postDetails.getPostDetails(params.id).subscribe(value => this.currentPostDetails = value)
    })

   }

  ngOnInit(): void {
  }

}
