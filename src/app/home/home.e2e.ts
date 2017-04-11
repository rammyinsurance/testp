import { browser, by, element } from 'protractor';

describe('DupontApp', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Markerfarm Web Project';
    expect(subject).toEqual(result);
  });

  it('should have `your content here` x-large', () => {
    let subject = element(by.css('[x-large]')).getText();
    let result  = 'Markerfarm Angular 2 seed project.';
    expect(subject).toEqual(result);
  });

});
