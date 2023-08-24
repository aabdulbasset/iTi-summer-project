import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MenubarModule } from "primeng/menubar";
import { InputTextModule } from "primeng/inputtext";
import { DividerModule } from "primeng/divider";
import { AvatarModule } from "primeng/avatar";
import { ProductsComponent } from "./products/products.component";
import { FooterComponent } from "./footer/footer.component";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";

import { PricePipe } from "./price.pipe";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { InputNumberModule } from "primeng/inputnumber";
import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { CartComponent } from "./cart/cart.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import {AuthInterceptor} from "./auth.interceptor";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductsComponent,
    FooterComponent,
    PricePipe,
    ProductdetailsComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    DividerModule,
    AvatarModule,
    CardModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
