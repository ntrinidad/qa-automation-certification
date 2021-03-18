import { Selector, t } from 'testcafe';

class InventoryPage {
  constructor() {
    this.pageTitle = Selector('#inventory_container .product_label').withExactText('Products');
    this.inventoryList = Selector('#inventory_container .inventory_list').child('.inventory_item');
  }

  getInventoryItem() {
    const randomIndex = Math.floor(Math.random() * this.inventoryList.count); 
    return this.inventoryList.nth(randomIndex);
  }
}

export default new InventoryPage();
