import puppeteer from 'puppeteer'
import { fork } from 'child_process';

jest.setTimeout(60000); //

describe('Page start', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
           headless: false,
    });
    page = await browser.newPage();
  });

  test('check card number valid ', async () => {
    await page.goto('http://localhost:9000')

    await page.waitForSelector('body')

    const input = await page.$('.card__number')
    const submit = await page.$('.card__button')

    await input.type('2202235433732147')
    await submit.click()

    expect(await page.$('.input-valid')).toBeTruthy()
  });

  test('check card number invalid ', async () => {
    await page.goto('http://localhost:9000')

    await page.waitForSelector('body')

    const input = await page.$('.card__number')
    const submit = await page.$('.card__button')

    await input.type('220223543373214')
    await submit.click()

    expect(await page.$('.input-not-valid')).toBeTruthy()
  });

  afterAll(async () => {
    await browser.close()
    server.kill();
  });
});
