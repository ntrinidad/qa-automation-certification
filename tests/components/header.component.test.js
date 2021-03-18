import CartPage from '../../page-objects/cart.page';
import HeaderComponent from '../../page-objects/components/header.component';
import SidebarComponent from '../../page-objects/components/sidebar.component';
import { standardUserRole } from '../../utils/roles';
import { environment } from '../../environments/environment';

fixture('Header testing')
  .page `${environment.pageUrl}`
  .beforeEach(async t => {
    await t
		.useRole(standardUserRole);
  });

	test('Open sidebar', async t => {
    await t
      .expect(HeaderComponent.container.exists).ok();
		await HeaderComponent.openMenu();
    await t
			.expect(SidebarComponent.container.exists).ok();
	});

  test('Navigate to shopping cart', async t => {
		await HeaderComponent.goToCart();
    await t
			.expect(CartPage.pageTitle.exists).ok();
  });
