import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
// import { IProduct } from './../../../../../Day-01/day-1-app/src/app/Models/iproduct';
import { Location } from '@angular/common';
import { APIService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.scss']
})
export class PdetailsComponent implements OnInit {
  RecivedProduct:IProduct | undefined
  Productlist:number[]=[]
  CurrentID:number=0
  CurrentIndex:number=0

  constructor(private ProductService:ProductService, private router:Router,private ActivatedRoute:ActivatedRoute,private location:Location,private APIService:APIService) {
    
   }

  ngOnInit(): void {
    // let SendID:number=(this.ActivatedRoute.snapshot.paramMap.get('id'))?Number(this.ActivatedRoute.snapshot.paramMap.get('id')):0;
    // console.log(SendID);
    // let SendProduct=this.ProductService.getProductsByID(SendID)
    // if (SendProduct) {
    //   this.RecivedProduct=SendProduct
    //   console.log(this.RecivedProduct)
    // }else{
    //   this.location.back()
    // }

    // this.Productlist=this.ProductService.IDlist()
    
    this.APIService.getAllProducts().subscribe(x=>{
      this.Productlist=x.map(y=>y.id)
    })

    // this.Productlist=this.APIService.IDlist()

console.log(this.Productlist)


    this.ActivatedRoute.paramMap.subscribe(x=>{
      this.CurrentID=(x.get('id'))?Number(x.get('id')):0
      // let found=this.ProductService.getProductsByID(this.CurrentID)
      this.APIService.getProductsByID(this.CurrentID).subscribe(x=>{
        let found=x
        console.log(found)
        if (found) {
          this.RecivedProduct=found
          console.log(this.RecivedProduct)
        }else{
          console.log("Product not found")
          this.location.back()
        }
      })
    })
  }
  back(){
    this.location.back()
  }
  prev(){
    this.CurrentIndex= this.Productlist.findIndex((x)=>x==this.CurrentID);
    this.router.navigate(['/orders',this.Productlist[--this.CurrentIndex]]);
  }
  next(){
    this.CurrentIndex= this.Productlist.findIndex((x)=>x==this.CurrentID);
    this.router.navigate(['/orders',this.Productlist[++this.CurrentIndex]]);
  }

}
