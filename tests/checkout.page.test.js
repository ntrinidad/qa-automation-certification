import CartPage from '../page-objects/cart.page';
import CheckoutPage from '../page-objects/checkout.page';
import InventoryPage from '../page-objects/inventory.page';
import HeaderComponent from '../page-objects/components/header.component';
import { standardUserRole } from '../utils/roles';
import { buyer } from '../data/orders';
import { environment } from '../environments/environment';

fixture('Checkout page testing - Place an order')
  .page `${environment.pageUrl}`
	.beforeEach(async t => {
    await t
		.useRole(standardUserRole);
  });


  test('Place an order', async t => {
		// Add items to cart
    const numberOfItems = Math.min(3, await InventoryPage.inventoryList.count);
    const itemsAddedName = (await InventoryPage.addMultipleInventoryItemsToShoppingCart(numberOfItems))
			.map(async item => {
				return await item.find('.inventory_item_name').innerText;
			});

		//Go to checkout
		await HeaderComponent.goToCart();
		await t
			.expect(await CartPage.cartItemList.count).eql(itemsAddedName.length)
			.click(CartPage.checkoutButton)
			.expect(CheckoutPage.stepOne.title.exists).ok();

		// Try to go to step 2 with missing buyer information
		await t
			.click(CheckoutPage.stepOne.continueButton)
			.expect(CheckoutPage.stepOne.errorMessage.visible).ok();

		// Fill buyer information and go to next step
		await CheckoutPage.stepOne.submitForm(buyer.firstName, buyer.lastName, buyer.postalCode);
		await t
			.expect(CheckoutPage.stepTwo.title.exists).ok();

		//Validate items in the overview list matches with the added items
		for(let i = 0; i < numberOfItems; i++) {
			const cartItemName = await itemsAddedName[i];
			const overviewItem = CheckoutPage.stepTwo.checkoutItemList.nth(i).find('.inventory_item_name');

			await t
				.expect(cartItemName).eql(await overviewItem.innerText);
		}

		await CheckoutPage.stepTwo.finishOrder();
		await t
			.expect(CheckoutPage.stepComplete.title.exists).ok()
			.expect(CheckoutPage.stepComplete.thankYouMessage.visible).ok();
	});
