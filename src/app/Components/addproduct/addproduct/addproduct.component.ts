import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';
import { IProduct } from './../../../Models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from './../../../Models/icategory';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  Cateogrylist:ICategory[]
  Newproduct:IProduct={} as IProduct
  Editproduct:IProduct={} as IProduct
  Editproductid:number=0


  constructor(private APIService:APIService, private Router:Router,private ActivatedRoute:ActivatedRoute,private location:Location) {
    this.Cateogrylist=[
      {id:1,Name:'Cateogry-1'},
      {id:2,Name:'Cateogry-2'},
      {id:3,Name:'Cateogry-3'},
    ]
  }

  

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(x=>{
      console.log(x);
      
      this.Editproductid=(x.get('id'))?Number(x.get('id')):0
      console.log(this.Editproductid)
      this.APIService.getProductsByID(this.Editproductid).subscribe(x=>{
        console.log(x)
        let found=x
        if (found) {
          this.Editproduct=found
          console.log(this.Editproduct)
        }else{
          console.log("Product not found")
          this.location.back()
        }
      })
    })
  }



  InsertNewProduct(){
    // let Productstatic:IProduct={
    // id:99,
    // Name:"Product-99",
    // Quantity:9,
    // Price:9000,
    // Img:"https://fakeimg.pl/250x100/",
    // CateogryID:1
    // }

    this.APIService.addNewProduct(this.Newproduct).subscribe({
      next:(x)=>{
        this.Router.navigate(['/orders'])
      },
      error:(y)=>{
        alert("error while adding")
      }
      
    })

  }
}
