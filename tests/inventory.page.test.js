import InventoryPage from '../page-objects/inventory.page';
import HeaderComponent from '../page-objects/components/header.component';
import { standardUserRole } from '../utils/roles';
import { environment } from '../environments/environment';

fixture('Inventory page testing')
  .page `${environment.pageUrl}`
  .beforeEach(async t => {
    await t
		.useRole(standardUserRole);
  });

	test.only('Add one random item to the shopping cart', async t => {
    const item = await InventoryPage.getAnyInventoryItem();
    await InventoryPage.addInventoryItemToShoppingCart(item);
    
    const itemButton = await item.find('.pricebar .btn_inventory');
    await t
      .expect(itemButton.textContent).contains('REMOVE')
      await t
      .expect(HeaderComponent.shoppingCartBadge.visible).ok()
      .expect(HeaderComponent.shoppingCartBadge.innerText).eql('1');
	});

  test.only('Add multiple items to the shopping cart', async t => {
    const total = await InventoryPage.inventoryList.count;
    for (let i = 0; i < total; i++) {
      const item = InventoryPage.inventoryList.nth(i);
      await InventoryPage.addInventoryItemToShoppingCart(item);
      
      const itemButton = await item.find('.pricebar .btn_inventory');
      await t
        .expect(itemButton.textContent).contains('REMOVE');
    }

    await t
      .expect(HeaderComponent.shoppingCartBadge.visible).ok()
      .expect(HeaderComponent.shoppingCartBadge.innerText).eql(`${total}`);
	});

