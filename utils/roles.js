import { Role } from 'testcafe';
import { lockedOutUser, standardUser } from '../data/crendentials';
import LoginPage from '../page-objects/login.page';
import { environment } from '../environments/environment';

export const standardUserRole = Role(environment.pageUrl, async t => {
  await LoginPage.submitForm(standardUser.username, standardUser.password);
}, { preserveUrl: true });

export const lockedOutUserRole = Role(environment.pageUrl, async t => {
  await LoginPage.submitForm(lockedOutUser.username, lockedOutUser.password);
}, { preserveUrl: true });
