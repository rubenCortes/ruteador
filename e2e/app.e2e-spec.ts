import { RuteoPage } from './app.po';

describe('ruteo App', function() {
  let page: RuteoPage;

  beforeEach(() => {
    page = new RuteoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
