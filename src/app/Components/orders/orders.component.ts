import { NgForOf } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { Store } from 'src/app/Models/store';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit,AfterViewInit {
  Cateogry:ICategory[];
  SelectedID:number=0;
  IsMessage:boolean=false
  ClientName:string='Zexal'
  IsPurshased:boolean=true

  // ReceivedNameincart!:string
  // ReceivedPriceincart!:number
  // ReceivedCount!:number
  // ReceivedTotalprice:number=0
  ReceivedCartarr:any[] | undefined
  Cartarr(x:any[]): void{
    this.ReceivedCartarr=x
  }

  @ViewChild(ProductsComponent) productRef!:ProductsComponent;

//   Cartname(x:string){
// this.ReceivedNameincart=x
//   }
//   Cartprice(x:number){
// this.ReceivedPriceincart=x
//   }
//   Cartcount(x:number){
// this.ReceivedCount=x
//   }
//   Carttotalprice(x:number){
// this.ReceivedTotalprice=x
//   }
  

  Total:number[]=[]
  Totalpriceforcart:number=0
  
  total(): void{
    this.Total=[]
    this.Totalpriceforcart=0
    // console.log(this.productRef.Productincart)
    // this.Totalpriceforcart=0
    for (const key of this.productRef.Productincart) {
      // console.log(key.Name);
      // console.log(key.Total);
      this.Total?.push(key.Total)
      }
      console.log(this.Total);

      
      for (let index = 0; index < this.Total.length; index++) {
        // this.Total[index]
        
        this.Totalpriceforcart+=this.Total[index]
      }
      console.log(this.Totalpriceforcart);
    }
  
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.productRef.ClientName);
  }

  // Cartarrpush(){
  //   this.Cartarr?.push({Name:this.ReceivedNameincart,Price:this.ReceivedPriceincart,Count:this.ReceivedCount,Total:this.ReceivedTotalprice})
  // }
  // ngOnChanges():void{
  //   this.Cartarrpush();
  //  }
  //  trackByFunc(index:number,item:IProduct){
  //   return item.ID;

  // }

  buy() {
    this.IsPurshased=!this.IsPurshased
    this.IsMessage=!this.IsMessage
  }
  
  Store:Store;
  constructor() {
    this.Store=new Store('ZStore',['Tanta','Cairo','Alexandria','Hurghada'],'../../../assets/pngwing.com.png')
    this.Cateogry=[
      {id:1,Name:'Cateogry-1'},
      {id:2,Name:'Cateogry-2'},
      {id:3,Name:'Cateogry-3'},
    ]
  }
  

  ngOnInit(): void {
  }

}
