import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
// import { IProduct } from './../../../../Day-01/day-1-app/src/app/Models/iproduct';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';
import { IUser } from '../Models/iuser';
// import { environment } from './../../../../Day-05/Frontend-Sohag-2022-master/src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  ProductList:number[]=[]

  private HttpOptions={};
  constructor(private HttpClient:HttpClient) {
    this.HttpOptions={
      headers:new HttpHeaders({ 
        'Content-Type':'application/json'
      })
    };
  }
    getAllProducts():Observable<IProduct[]>{
// return this.HttpClient.get<IProduct[]>('http://localhost:3000/Products')
console.log(this.HttpClient.get<IProduct[]>(`${environment.url}/products`).subscribe(x=>{
  console.log(x)
}))
return this.HttpClient.get<IProduct[]>(`${environment.url}/products`)

    }
    getProductsByCateogryID(x:number):Observable<IProduct[]>{

      return this.HttpClient.get<IProduct[]>(`${environment.url}/products?CateogryID=${x}`)
    }
    getProductsByID(x:number):Observable<IProduct>{
      return this.HttpClient.get<IProduct>(`${environment.url}/products/${x}`)
        }

    // IDlist():Observable<IProduct[]>{
    //    return this.HttpClient.get<IProduct[]>(`${environment.url}/products`)
    // }
    IDlist():number[]{
        this.HttpClient.get<IProduct[]>(`${environment.url}/products`).subscribe(x=>{
          this.ProductList=x.map(y=>y.id);
          console.log(x)
          console.log(this.ProductList)
          return this.ProductList
          // console.log(this.ProductList)
        })
        console.log(this.ProductList)
        return this.ProductList
    }

    addNewProduct(product:IProduct):Observable<IProduct>{
      return this.HttpClient.post<IProduct>(`${environment.url}/products`,JSON.stringify(product),this.HttpOptions)
    }

    adduser(user:IUser):Observable<IUser>{
      return this.HttpClient.post<IUser>(`${environment.url}/users`,JSON.stringify(user),this.HttpOptions)
    }

    editProduct(productid:number,product:IProduct):Observable<IProduct>{
      return this.HttpClient.put<IProduct>(`${environment.url}/products/${productid}`,JSON.stringify(product))
    }

    deleteproduct(productid:number,product:IProduct):Observable<IProduct>{
      return this.HttpClient.delete<IProduct>(`${environment.url}/products/${productid}`)
    }
      
}
