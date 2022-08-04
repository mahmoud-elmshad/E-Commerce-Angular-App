import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  private isuserloggedsubject:BehaviorSubject<boolean>
  constructor() {
    this.isuserloggedsubject=new BehaviorSubject<boolean>(this.isUserLogged)
  }

  login(email:string,password:string){
    let usertoken="999999999"

    localStorage.setItem("token",usertoken)
    this.isuserloggedsubject.next(true)
  }

  logout(){
    localStorage.removeItem("token")
    this.isuserloggedsubject.next(false)

  }

  get isUserLogged(){
    return (localStorage.getItem('token'))?true:false
  }

  getLogStatus():Observable<boolean>{
   return this.isuserloggedsubject.asObservable()
  }
}
