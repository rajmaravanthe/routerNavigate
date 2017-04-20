import { NavigatePage } from './app.po';

describe('navigate App', function() {
  let page: NavigatePage;

  beforeEach(() => {
    page = new NavigatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
