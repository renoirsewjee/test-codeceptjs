Feature('My First Test');

Scenario('must see Github on github.com', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
});
