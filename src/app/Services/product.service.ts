import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
// import { Iproduct } from './../../../../Day-02/Frontend-Sohag-2022-master/src/app/Models/iproduct';
// import { IProduct } from './../../../../Day-01/day-1-app/src/app/Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductList:IProduct[]=[]
  constructor() {
    this.ProductList=[{id:1,Name:"Product-1",Quantity:9,Price:5000,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
                      {id:2,Name:"Product-2",Quantity:6,Price:6000,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
                      {id:3,Name:"Product-3",Quantity:5,Price:9000,Img:'https://fakeimg.pl/250x100/',CateogryID:3},
                      {id:4,Name:"Product-4",Quantity:8,Price:4000,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
                      {id:5,Name:"Product-5",Quantity:2,Price:8000,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
                      {id:6,Name:"Product-6",Quantity:2,Price:7000,Img:'https://fakeimg.pl/250x100/',CateogryID:3},
                      {id:7,Name:"Product-7",Quantity:0,Price:7000,Img:'https://fakeimg.pl/250x100/',CateogryID:1}
                     ]
  }
  getAllProducts():IProduct[]{
    return this.ProductList;
  }

  getProductsByCateogryID(x:number):IProduct[]{
    if(x==0){
      return this.getAllProducts();
    }
    else{
      return this.ProductList.filter(y=>y.CateogryID==x);
    }
  }
  getProductsByID(x:number):IProduct|undefined{
return this.ProductList.find((y)=>y.id==x)
  }

  IDlist():number[]{
    return this.ProductList.map(x=>x.id)
  }

  addnew(x:IProduct):number{
return this.ProductList.push(x)
  }

}
