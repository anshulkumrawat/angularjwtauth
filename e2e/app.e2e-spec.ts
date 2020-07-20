import { AngularjwtauthPage } from './app.po';

describe('angularjwtauth App', () => {
  let page: AngularjwtauthPage;

  beforeEach(() => {
    page = new AngularjwtauthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
