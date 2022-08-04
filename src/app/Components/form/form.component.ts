import { Component, OnInit, OnChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

// import { IProduct } from './../../../../../Day-01/day-1-app/src/app/Models/iproduct';
// import { ICategory } from './../../../../../Day-01/day-1-app/src/app/Models/icategory';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
Newproduct:IProduct
Cateogry:ICategory[]


  constructor( private ProductService:ProductService,private router:Router) {

    this.Cateogry=[
      {id:1,Name:'Cateogry-1'},
      {id:2,Name:'Cateogry-2'},
      {id:3,Name:'Cateogry-3'},
    ]
    this.Newproduct={
      id:0,Name:'',Quantity:0,Price:0,Img:'',CateogryID:0
    }
    
  }
  ngOnChanges(){
    this.addproduct()
  }
  addproduct(){
this.ProductService.addnew(this.Newproduct)
this.router.navigate(['/orders']);
console.log(this.Newproduct)
console.log(this.ProductService.ProductList)

  }
  ngOnInit(): void {
    // this.addproduct()
  }

}
