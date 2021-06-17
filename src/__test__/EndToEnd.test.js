import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
      jest.setTimeout(30000);
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.event');
    });
  
    afterAll(() => {
      browser.close();
    });
  
    test('An event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event .event-details');
      expect(eventDetails).toBeNull();
    });
  
    test('User can expand an event to see its details', async () => {
      await page.click('.event .details-btn');
      const eventDetails = await page.$('.event .event-details');
      expect(eventDetails).toBeDefined();
    });
    test('User can collapse an event to hide its details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .event-details');
        expect(eventDetails).toBeNull();
      });
  });

  describe('Filter events by city', () => {
    let browser;
    let page;
    beforeAll(async () => {
      jest.setTimeout(30000);
      browser = await puppeteer.launch();
      page = await browser.newPage();
      await page.goto('http://localhost:3000/');
      await page.waitForSelector('.city');
    });


    afterAll(() => {
        browser.close();
      });
      test('When user hasn’t searched for a city, show upcoming events from all cities', async () => {
         const allEvent = await page.$('.event');
         expect(allEvent).toBeDefined();
      })
      test('user should see a list of suggestion when they search for a city', async () => {
      const searchCity = await page.$('.city');
      await searchCity.type('input[name=value]', 'berlin');
      const suggestions = await page.$$('.suggestions li')
      expect(suggestions).toBeDefined();
      })
      test('user can select a city from the suggest list', async () => {
         const suggestionsCityList = await page.$('.suggestions')
         expect(suggestionsCityList).toBeDefined();
      })
    });