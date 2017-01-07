import { StockClientPage } from './app.po';

desctock-client App', function() {
  let page: StockClientPage;

  beforeEach(() => {
    page = new StockClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
