
import { browser, element, by } from "protractor";

// 1.0 create movie succesfully => add new movie to the database
// 1.1 shows error message when creating invalid movie

describe('Movie component', () => {
    it('1.1 shows error message when creating invalid movie', () => {
        browser.get('/admin');
        element(by.id('color')).sendKeys('Green');
        browser.sleep(5000);
        // element.all(by.css('.delete')).then(function (elemsBefore) {
        //     element(by.id('create-title')).sendKeys('');
        //     element(by.id('create-director')).sendKeys('');
        //     element(by.id('create-runtime')).sendKeys(120);
        //     element(by.id('add-movie')).click().then(function () {
        //         element.all(by.css('.delete')).then(function (elemsAfter) {
        //             expect(elemsAfter.length - elemsBefore.length).toBe(0);
        //         });
        //     });
        // });
    });
});