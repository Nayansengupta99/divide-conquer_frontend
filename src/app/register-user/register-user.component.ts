import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AppServiceService } from '../app-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {



  user: User = new User("", 0);
  userAge = ""
  message: any
  dateOfBirth: any

  constructor(private service: AppServiceService) { }



  ngOnChanges() {
    this.calculateAge(this.dateOfBirth);
  }


  public calculateAge(dateOfBirth: any) {
    this.user.userAge = moment().diff(dateOfBirth, 'years');
  }

  ngOnInit(): void {
  }


  public doUserRegistration() {
    // this.user.userAge = Number(this.userAge)
    this.service.createUser(this.user).subscribe(data => {
      //console.log(data);
      this.message = data
    },
      error => console.log(error));
  }

}
