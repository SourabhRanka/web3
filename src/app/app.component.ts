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
      "quantity" : 0
    },
    {
      "name": 'item2',
      "price" : 40,
      "quantity" : 0
    },
  
    {
      "name": 'item3',
      "price" : 50,
      "quantity" : 0
    }];
  
    cart = [];
  
}
