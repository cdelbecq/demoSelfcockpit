import { DemoSelfcockpitPage } from './app.po';

describe('demo-selfcockpit App', function() {
  let page: DemoSelfcockpitPage;

  beforeEach(() => {
    page = new DemoSelfcockpitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
