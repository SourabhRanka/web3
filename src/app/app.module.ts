import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { ItemDetailsComponent } from './item-details/item-details.component';
import { InventoryService } from './inventory.service';
>>>>>>> master


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PaymentComponent,
    HomeComponent,
    PaymentSuccessComponent,
<<<<<<< HEAD
    LoginComponent
=======
    ItemDetailsComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
