import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdsService } from './../../Services/ads.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy {
  Adssubscription!:Subscription
  Adssubscriptionstring!:string
  constructor(private AdsService:AdsService) {

  }
  
  ngOnInit(): void {
    let x={
      next:(y:string)=>{
        console.log(y);
      },
      error:(y:string)=>{
        console.log(y);
      },
      complete:()=>{
        console.log("Ads Finished");
      }
    }

    // this.Adssubscription = this.AdsService.changeads(2).subscribe(x)
    this.AdsService.changeads(2).subscribe(x=>{
      this.Adssubscriptionstring=x
    })
    // console.log(this.Adssubscription)
  }

  ngOnDestroy(): void {
    this.Adssubscription.unsubscribe()
  }


}
