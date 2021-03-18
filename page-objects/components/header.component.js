import { Selector, t } from 'testcafe';

class HeaderComponent {
  constructor() {
    this.container = Selector('#header_container');
    this.menuButton = Selector('#header_container #react-burger-menu-btn');
    this.shoppingCartLink = Selector('#header_container .shopping_cart_link');
    this.shoppingCartBadge = Selector('#header_container .shopping_cart_link .shopping_cart_badge');
  }

  async goToCart() {
    await t
      .click(this.shoppingCartLink);
  }

  async openMenu() {
    await t
      .click(this.menuButton);
  }
}

export default new HeaderComponent();