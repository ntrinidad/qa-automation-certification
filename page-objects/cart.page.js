import { Selector, t } from 'testcafe';

class CartPage {
  constructor() {
    this.pageTitle = Selector('#contents_wrapper .subheader').withExactText('Your Cart');
  }

}

export default new CartPage();
