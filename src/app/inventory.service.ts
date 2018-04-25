import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  inventory = [
    {
      "name": 'item1',
      "price": 30,
      "quantity": 0,
      "selected": false,
      "description" : "this is item1"
    },
    {
      "name": 'item2',
      "price": 40,
      "quantity": 0,
      "selected": false,
      "description" : "this is item2"
    },

    {
      "name": 'item3',
      "price": 50,
      "quantity": 0,
      "selected": false,
      "description" : "this is item3"
    }];


  constructor() { }

  getInventory(){
    return this.inventory;
  }

}
