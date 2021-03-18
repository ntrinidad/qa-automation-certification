import { Selector, t } from 'testcafe';

class SidebarComponent {
  constructor() {
    this.container = Selector('.bm-menu-wrap');
    this.inventoryLink = Selector('#inventory_sidebar_link');
    this.logoutLink = Selector('#logout_sidebar_link');
  }

  async goToInventory() {
    await t
      .click(this.inventoryLink);
  }

  async logout() {
    await t
      .click(this.logoutLink);
  }
}

export default new SidebarComponent();