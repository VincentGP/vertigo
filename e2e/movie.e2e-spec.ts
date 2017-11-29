
import { browser, element, by } from "protractor";

// 1.0 create movie succesfully => add new movie to the database
// 1.1 shows error message when creating invalid movie

describe('Movie component', () => {
    it('1.0 create movie succesfully', () => {
        browser.get('/admin');
        element.all(by.css('.delete')).then((elemsBefore) => {
            element(by.id('title')).sendKeys('Snake Eyes');
            element(by.id('director')).sendKeys('Brian De Palma');
            element(by.id('runtime')).sendKeys(98);
            element(by.id('add-movie')).click().then(() => {
                element.all(by.css('.delete')).then((elemsAfter) => {
                    expect(elemsAfter.length - elemsBefore.length).toBe(1);
                });
            });
        });
    });
    it('1.1 shows error message when creating invalid movie', () => {
        browser.get('/admin');
        element.all(by.css('.delete')).then((elemsBefore) => {
            element(by.id('title')).sendKeys('');
            element(by.id('director')).sendKeys('');
            element(by.id('runtime')).sendKeys('This is not a number');
            element(by.id('add-movie')).click().then(() => {
                element.all(by.css('.delete')).then((elemsAfter) => {
                    expect(elemsAfter.length - elemsBefore.length).toBe(0);
                });
            });
        });
    });
    it('1.2 edit an existing movie', () => {
        let previousTitle = element(by.id('e2e-title'));
        element(by.id('e2e-edit')).click().then(() => {
            element(by.id('title')).clear();
            element(by.id('title')).sendKeys('Con Air 2');
            element(by.id('director')).clear();
            element(by.id('director')).sendKeys('Nicolas Cage');
            element(by.id('runtime')).clear();
            element(by.id('runtime')).sendKeys(121);
            browser.sleep(2000);
            element(by.id('update-movie')).click();
            browser.sleep(4000);
            let newTitle = element(by.id('e2e-title'));
            expect(previousTitle !== newTitle);
        });   
    });
});