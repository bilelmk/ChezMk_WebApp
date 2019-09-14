import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component' ;
import { SignUpComponent } from '../sign-up/sign-up.component' ;
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  username: string = undefined;
  subscription: Subscription;

  constructor(public dialog: MatDialog,
    private authService: AuthService ) { 
    }

  ngOnInit() {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openLoginForm() {
    let loginRef = this.dialog.open(LoginComponent, {width: '550px', height: '550px'});

    loginRef.afterClosed()
      .subscribe(result => {
      });
  }

  openSignUpForm() {
    let SignRef = this.dialog.open(SignUpComponent, {width: '550px', height: '550px'});

    SignRef.afterClosed()
      .subscribe(result => {
      });
  }
  

  logOut() {
    this.username = undefined;
    this.authService.logOut();
  }

}
