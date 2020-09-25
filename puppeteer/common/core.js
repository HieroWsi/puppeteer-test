//Testing page url
const testingPageUrl = 'http://google.com';

//Check the number of opened tabs
const getOpenTabsNumber = async () => Object.keys(await browser.pages()).length;

//Initialization testing page
const init = async () => {
  console.log('The number of open tabs in the browser:', await getOpenTabsNumber());
  await page.goto(testingPageUrl, { waitUntil: 'networkidle2', timeout: 10000 });
};

module.exports = {
  init,
};
