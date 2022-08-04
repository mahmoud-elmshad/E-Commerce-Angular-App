import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/Services/userauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isuserlogged:boolean

  constructor(private userauth:UserauthService) {
    this.isuserlogged=this.userauth.isUserLogged
console.log(this.isuserlogged);

  }

  ngOnInit(): void {
    // this.isuserlogged=this.userauth.isUserLogged
    this.userauth.getLogStatus().subscribe(status=>{
this.isuserlogged=status
console.log(status);

    })
  }

}
