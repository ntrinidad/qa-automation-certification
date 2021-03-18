import InventoryPage from '../page-objects/inventory.page';
import LoginPage from '../page-objects/login.page';
import { invalidUser, standardUser } from '../data/crendentials';
import { environment } from '../environments/environment';

fixture('Login testing')
  .page `${environment.pageUrl}`;

	test.only('Trying to login with invalid credentials', async t => {
    await LoginPage.submitForm(invalidUser.username, invalidUser.password);

    await t
      .expect(LoginPage.errorMessage.exists).ok()
      .expect(LoginPage.errorMessage.visible).ok()
      .expect(LoginPage.errorMessage.innerText).contains('Username and password do not match any user in this service');

	});

  test.only('Login with a standard user credentials', async t => {
    await LoginPage.submitForm(standardUser.username, standardUser.password);
    await t
      .expect(InventoryPage.pageTitle.exists).ok();
  });
