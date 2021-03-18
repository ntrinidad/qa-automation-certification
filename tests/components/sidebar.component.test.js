import InventoryPage from '../../page-objects/inventory.page';
import LoginPage from '../../page-objects/login.page';
import HeaderComponent from '../../page-objects/components/header.component';
import SidebarComponent from '../../page-objects/components/sidebar.component';
import { standardUserRole } from '../../utils/roles';
import { environment } from '../../environments/environment';

fixture('Sidebar testing')
  .page `${environment.pageUrl}`
  .beforeEach(async t => {
    await t
		.useRole(standardUserRole);
  });

	test('Navigate to Inventory page', async t => {
		await HeaderComponent.openMenu();
    await t
			.expect(SidebarComponent.inventoryLink.exists).ok();
		await SidebarComponent.goToInventory();
		await t
			.expect(InventoryPage.pageTitle.exists).ok();
	});

  test('Logout', async t => {
		await HeaderComponent.openMenu();
    await t
			.expect(SidebarComponent.logoutLink.exists).ok();
    await SidebarComponent.logout();
		await t
			.expect(LoginPage.loginButton.exists).ok();
  });
