import { LIJDashboardPage } from './app.po';

describe('lijdashboard App', () => {
  let page: LIJDashboardPage;

  beforeEach(() => {
    page = new LIJDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
