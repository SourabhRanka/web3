import { Injectable } from '@angular/core';
import { INVENTORY } from './inventory'

@Injectable()
export class InventoryService {

  inventory = INVENTORY;


  constructor() { }

  getInventory(){
    return this.inventory;
  }

}
