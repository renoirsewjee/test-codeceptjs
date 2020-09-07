Feature('My First Test');

Scenario('Must see Mweb on mweb.co.za', (I) => {
    I.amOnPage('https://mweb.co.za');
    I.see('Coverage');
});
