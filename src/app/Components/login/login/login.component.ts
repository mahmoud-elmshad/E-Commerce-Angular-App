import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/Services/userauth.service';
// import { UserAuthService } from './../../../../../../Day-07/Frontend-Sohag-2022-master/src/app/Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isuserlogged:boolean=false

  constructor(private userauth:UserauthService) {}

  ngOnInit(): void {
    this.isuserlogged=this.userauth.isUserLogged
  }
  userlogin(){
    this.userauth.login("email","password")
    this.isuserlogged=this.userauth.isUserLogged

  }
  userlogout(){
this.userauth.logout()
this.isuserlogged=this.userauth.isUserLogged

  }
}
