import { Selector, t } from 'testcafe';

class InventoryPage {
  constructor() {
    this.pageTitle = Selector('#inventory_container .product_label').withExactText('Products');
    this.inventoryList = Selector('#inventory_container .inventory_list').child('.inventory_item');
  }

  async addInventoryItemToShoppingCart(item) {
    const addToCartButton = item.find('.pricebar .btn_inventory').withText('ADD TO CART');
    await t.click(addToCartButton);
  }

  async getAnyInventoryItem() {
    const randomIndex = Math.floor(Math.random() * await this.inventoryList.count);
    return this.inventoryList.nth(randomIndex);
  }
}

export default new InventoryPage();
