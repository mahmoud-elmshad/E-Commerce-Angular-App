import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './Components/addproduct/addproduct/addproduct.component';
import { FormComponent } from './Components/form/form.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { PdetailsComponent } from './Components/pdetails/pdetails.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login/login.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'orders',component:OrdersComponent,canActivate:[AuthGuard]},
  {path:'orders/:id',component:PdetailsComponent},
  {path:'products',component:ProductsComponent},
  {path:'form',component:FormComponent},
  {path:'newproduct',component:AddproductComponent},
  {path:'newproduct/:id',component:AddproductComponent},
{
  path: 'users', 
  loadChildren: () => import('src/app/Components/users/user/user.module').then(m => m.UserModule)
},
 
]},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'logout',component:LoginComponent},
{path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
