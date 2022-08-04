import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  IsMessage:boolean=false
  ClientName:string='Zexal'
  IsPurshased:boolean=true


  buy() {
    this.IsPurshased=!this.IsPurshased
    this.IsMessage=!this.IsMessage
  }
  Store:Store;
  constructor() {
    this.Store=new Store('ZStore',['Tanta','Cairo','Alexandria','Hurghada'],'../../../assets/pngwing.com.png')
    
  }

  ngOnInit(): void {
  }

}
