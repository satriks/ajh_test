import puppeteer from 'puppeteer'

describe('Page start', () => {
  let browser
  let page

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: false
    })
    page = await browser.newPage()
  }, 30000)

  test('check card number valid ', async () => {
    await page.goto('http://localhost:9000')

    await page.waitForSelector('body')

    const input = await page.$('.card__number')
    const submit = await page.$('.card__button')

    await input.type('2202235433732147')
    await submit.click()

    expect(await page.$('.input-valid')).toBeTruthy()
  }, 30000)

  test('check card number invalid ', async () => {
    await page.goto('http://localhost:9000')

    await page.waitForSelector('body')

    const input = await page.$('.card__number')
    const submit = await page.$('.card__button')

    await input.type('220223543373214')
    await submit.click()

    expect(await page.$('.input-not-valid')).toBeTruthy()
  }, 30000)

  afterAll(async () => {
    await browser.close()
  })
})
