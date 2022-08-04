import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { OrdersComponent } from './Components/orders/orders.component';
import { NationalIDPipe } from './Pipes/national-id.pipe';
import { CreditPipe } from './Pipes/credit.pipe';
import { MainComponent } from './Components/main/main.component';
import { PdetailsComponent } from './Components/pdetails/pdetails.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { FormComponent } from './Components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Components/register/register.component';
import { AddproductComponent } from './Components/addproduct/addproduct/addproduct.component';
import { LoginComponent } from './Components/login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductCardDirective,
    OrdersComponent,
    NationalIDPipe,
    CreditPipe,
    MainComponent,
    PdetailsComponent,
    HomeComponent,
    NotfoundComponent,
    FormComponent,
    RegisterComponent,
    AddproductComponent,
    LoginComponent,
    
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
