import { FetchService } from 'src/app/services/fetch.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser
  constructor(private fetchService: FetchService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {

      const state = this.router.getCurrentNavigation()?.extras.state as IUser
      if(state){
        this.user = state
      } else {
        this.fetchService.getCurrentUSEr(params.id).subscribe(value => this.user = value)
      }
    })


   }

  ngOnInit(): void {

  }

}
