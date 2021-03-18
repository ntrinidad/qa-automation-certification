import { Selector, t } from 'testcafe';

class CartPage {
  constructor() {
    this.pageTitle = Selector('#contents_wrapper .subheader').withExactText('Your Cart');
    this.cartItemList = Selector('#contents_wrapper .cart_list').child('.cart_item');
    this.checkoutButton = Selector('#contents_wrapper .cart_footer .checkout_button').withExactText('CHECKOUT');
  }
}

export default new CartPage();
