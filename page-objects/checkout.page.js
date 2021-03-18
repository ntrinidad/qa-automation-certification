import { Selector, t } from 'testcafe';

class StepOne {
	constructor() {
		this.title = Selector('div.subheader').withExactText('Checkout: Your Information');
    this.firstNameField = Selector('input[data-test="firstName"]');
    this.lastNameField = Selector('input[data-test="lastName"]');
		this.postalCodeField = Selector('input[data-test="postalCode"]');
    this.continueButton = Selector('input.cart_button[value="CONTINUE"]');
    this.errorMessage = Selector('h3[data-test="error"]');
  }

  async submitForm(firstName, lastName, postalCode) {
    await t
      .typeText(this.firstNameField, firstName)
      .typeText(this.lastNameField, lastName)
			.typeText(this.postalCodeField, postalCode)
      .click(this.continueButton);
  }
}

class StepTwo {
	constructor() {
		this.title = Selector('div.subheader').withExactText('Checkout: Overview');
    this.checkoutItemList = Selector('#contents_wrapper .cart_list').child('.cart_item');
		this.checkoutButton = Selector('#contents_wrapper .cart_footer .cart_button').withExactText('FINISH');
  }

	async finishOrder() {
    await t
      .click(this.checkoutButton);
  }
}

class StepComplete {
	constructor() {
		this.title = Selector('div.subheader').withExactText('Finish');
    this.thankYouMessage = Selector('h2.complete-header').withExactText('THANK YOU FOR YOUR ORDER');
  }
}

class CheckoutPage {
  constructor() {
    this.stepOne = new StepOne();
		this.stepTwo = new StepTwo();
		this.stepComplete = new StepComplete();
  }
}

export default new CheckoutPage();
