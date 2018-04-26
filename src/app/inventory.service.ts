import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  inventory = [
    {
      "name": 'shirt-1',
      "price": 30,
      "quantity": 0,
      "selected": false,
      "description" : "US Polo Kids Boys Solid Casual Shirt",
      "imagename" : "shirt1.jpeg"
    },
    {
      "name": "shirt-2",
      "price": 40,
      "quantity": 0,
      "selected": false,
      "description" : "Deeksha Men's Solid Casual Button Down Shirt",
      "imagename" : "shirt2.jpeg"
    },

    {
      "name": "shirt-3",
      "price": 50,
      "quantity": 0,
      "selected": false,
      "description" : "Raymond Men's Solid Casual Button Down Shirt",
      "imagename" : "shirt3.jpeg"
    },
  ];


  constructor() { }

  getInventory(){
    return this.inventory;
  }

}
