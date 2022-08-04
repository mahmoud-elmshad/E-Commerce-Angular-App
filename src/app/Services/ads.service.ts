import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
private Adslist:string[]=[]
  constructor() {
    this.Adslist=[
      'This is AD-1',
      'This is AD-2',
      'This is AD-3',
      'This is AD-4',
      'This is AD-5'
    ]
  }
  
  changeads(interval:number):Observable<string>{
    return new Observable<string>((observer)=>{
      let counter=0
      let timer=setInterval(()=>{
        console.log("+++");
        
        if(counter==this.Adslist.length)
          {
            observer.complete();
          }

          if(this.Adslist[counter]=="")
          {
            observer.error("empty ad");
          }

        observer.next(this.Adslist[counter])
        counter++

      },interval*1000);
      return{
        unsubscribe(){
          clearInterval(timer)
          console.log("Stop");
          
        }
      }
    })
  }

}
