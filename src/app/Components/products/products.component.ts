import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { count } from 'rxjs';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from './../../Models/icategory';
import { IProduct } from './../../Models/iproduct';
import { Store } from './../../Models/store';
import { Router } from '@angular/router';
import { APIService } from 'src/app/Services/api.service';
// import { APIService } from './../../Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {
  ClientName:string='Zexal'
  // ProductList:IProduct[];
  IsPurshased:boolean=true;
  IsMessage:boolean=false;
  // Cateogry:ICategory[];
  // SelectedID:number=0;

  NationalID:number=29707021509345
  Birthdate:Date;
  Card:string='0000000000000008'

  
  Purchasedate:Date=new Date()
  // select({

  // })

// constructor(public x:string){}

buy() {
  this.IsPurshased=!this.IsPurshased
  this.IsMessage=!this.IsMessage
}

  IProduct:IProduct={
  id: 0,
  Name: '',
  Quantity: 0,
  Price: 0,
  Img: '',
  CateogryID: 0
  }

  ICategory:ICategory={
    id: 0,
    Name: ''
  }

  Store:Store;
  constructor(private ProductService:ProductService, private router:Router,private APIService:APIService) {

    this.Birthdate=new Date(1999,1,2)

    this.Store=new Store('ZStore',['Tanta','Cairo','Alexandria','Hurghada'],'../../../assets/pngwing.com.png')

    // this.ProductList=[{id:1,Name:"Product-1",Quantity:9,Price:5000,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
    //                   {id:2,Name:"Product-2",Quantity:6,Price:6000,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
    //                   {id:3,Name:"Product-3",Quantity:5,Price:9000,Img:'https://fakeimg.pl/250x100/',CateogryID:3},
    //                   {id:4,Name:"Product-4",Quantity:8,Price:4000,Img:'https://fakeimg.pl/250x100/',CateogryID:1},
    //                   {id:4,Name:"Product-5",Quantity:2,Price:8000,Img:'https://fakeimg.pl/250x100/',CateogryID:2},
    //                   {id:4,Name:"Product-6",Quantity:2,Price:7000,Img:'https://fakeimg.pl/250x100/',CateogryID:3},
    //                   {id:4,Name:"Product-7",Quantity:0,Price:7000,Img:'https://fakeimg.pl/250x100/',CateogryID:1}
    //                  ]
    // this.ProductList=[{ID:2,Name:"Product-2",Quantity:9,Price:50,CateogryID:2}]
    // this.ProductList=[{ID:2,Name:"Product-3",Quantity:9,Price:50,CateogryID:3}]

    // this.Cateogry=[
    //   {ID:1,Name:'Cateogry-1'},
    //   {ID:2,Name:'Cateogry-2'},
    //   {ID:3,Name:'Cateogry-3'},
    // ]

  //  this.Totalpriceemit=new EventEmitter<number>()
  //  this.Nameincartemit=new EventEmitter<string>()
  //  this.Priceincartemit=new EventEmitter<number>()
  //  this.Countemit=new EventEmitter<number>()
   this.Productemit=new EventEmitter<Array<any>>()

  }
  // reduce(x:IProduct){
  //   return x.Quantity=x.Quantity-1
  // }


  trackByFunc(index:number,item:IProduct){
    return item.id;

  }

  @Input() ReceivedSelectedID:number=0;
  SelectedList:IProduct[]=[];

  ngOnChanges():void{
    // this.Productsort();
    // this.SelectedList= this.ProductService.getProductsByCateogryID(this.ReceivedSelectedID)

    this.APIService.getProductsByCateogryID(this.ReceivedSelectedID).subscribe(x=>{
      this.SelectedList=x
    })
   }
  

//   private Productsort(){
//   if(this.ReceivedSelectedID==0){
//    this.SelectedList= Array.from(this.ProductList);
//    return;
//   }
//  this.SelectedList= this.ProductList.filter((i)=>i.CateogryID==this.ReceivedSelectedID);
//  }

 Totalprice:number=0
//  @Output() Totalpriceemit:EventEmitter<number>;
 Nameincart!:string
//  @Output() Nameincartemit:EventEmitter<string>;
 Priceincart!:number
//  @Output() Priceincartemit:EventEmitter<number>;
 Count!:number
//  @Output() Countemit:EventEmitter<number>;
Productincart:any[]=[]
 @Output() Productemit:EventEmitter<Array<any>>;
//  zequal:any=NaN

 add(x:string,y:number,z:any=0,item:IProduct){
  // parseInt(z)
  
  this.Nameincart=x
  this.Priceincart=y
  if (parseInt(z)>item.Quantity) {
    z=item.Quantity
    this.Count=item.Quantity
  }else if(z==0){
    z=1
    this.Count=1
  }
  else{
    this.Count=z
  }
  console.log(z)
  
  this.Totalprice = (y*parseInt(z))
  this.Productincart?.push({Name:this.Nameincart,Price:this.Priceincart,Count:this.Count,Total:this.Totalprice})
console.log(this.Productincart);
  // this.Totalpriceemit.emit(this.Totalprice)
  // this.Totalpriceemit.emit(this.Totalprice,this.Nameincart,this.Priceincart,this.Count)
  // this.Nameincartemit.emit(this.Nameincart)
  // this.Priceincartemit.emit(this.Priceincart)
  // this.Countemit.emit(this.Count)
  this.Productemit.emit(this.Productincart)
  return item.Quantity=item.Quantity-parseInt(z);

 }

 
  ngOnInit(): void {
    // this.Productsort();
  //  this.SelectedList=this.ProductService.getProductsByCateogryID(this.ReceivedSelectedID)

   this.APIService.getAllProducts().subscribe(x=>{
    this.SelectedList=x;
   })
  }
  detail(x:number){
this.router.navigate(['orders',x])
    }

    edit(x:number){
      this.router.navigate(['newproduct',x])
    }
    deletei(x:number,item:IProduct){
     this.APIService.deleteproduct(x,item).subscribe(x=>{
      console.log(x)
      
     })
     this.router.navigate(['orders'])
    }

}
