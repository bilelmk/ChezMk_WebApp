import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<SignUpComponent> ,
              private authservice : AuthService) { }

  ngOnInit() {
  }

  signup(f:NgForm){
    this.authservice.SignUp({
      password : f.value.pass,
      firstname :f.value.firstname ,
      lastname: f.value.lastname,
      username : f.value.username
    }).subscribe() ;
  }


}
