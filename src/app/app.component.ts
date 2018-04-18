import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inventory = [
    {
      "name": 'item1',
      "price" : 30,
      "quantity" : 0,
      "selected" : false
    },
    {
      "name": 'item2',
      "price" : 40,
      "quantity" : 0,
      "selected" : false
    },
  
    {
      "name": 'item3',
      "price" : 50,
      "quantity" : 0,
      "selected" : false
    }];
  
    cart = [];

    addToCart(index){
      this.cart.push(this.inventory[index]);
      this.inventory[index].selected = true;
    }
    removeFromCart(index){
      this.inventory[index].quantity = 0;
      let i = this.cart.indexOf(this.inventory[index]);
      this.cart.splice(i,1);
      this.inventory[index].selected = false;
    }
  
}
