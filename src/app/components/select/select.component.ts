import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IUser } from '../models/user';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  userDetails: number
  users: IUser[]

  myForm = new FormGroup({
    id: new FormControl(0)
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }
  save(): void {
    this.userDetails = +this.myForm.controls.id.value

  }

}
