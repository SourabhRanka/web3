import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  inventory = [
    {
      "name": 'item1',
      "price": 30,
      "quantity": 0,
      "selected": false,
      "description" : "this is item1",
      "imagename" : "shirt1.jpeg"
    },
    {
      "name": 'item2',
      "price": 40,
      "quantity": 0,
      "selected": false,
      "description" : "this is item2",
      "imagename" : "shirt2.jpeg"
    },

    {
      "name": 'item3',
      "price": 50,
      "quantity": 0,
      "selected": false,
      "description" : "this is item3",
      "imagename" : "shirt3.jpeg"
    }];


  constructor() { }

  getInventory(){
    return this.inventory;
  }

}
