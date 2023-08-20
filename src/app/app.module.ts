import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

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
import { PricePipe } from "./price.pipe";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { InputNumberModule } from "primeng/inputnumber";
import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
