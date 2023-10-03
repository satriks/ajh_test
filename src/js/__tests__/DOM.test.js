/**
 * @jest-environment jsdom
 */

beforeAll(() => {
  document.body.innerHTML = `<div class="card">
    <h3>Check your credit card number</h3>
    <ul class="card__images">
    <li><span class="card__item visa not-valid" title="Visa"><img src="./images/icons8-visa-48.png" alt=""></span></li>
    <li><span class="card__item master not-valid" title="Mastercard"><img src="./images/icons8-mastercard-48.png" alt=""></span></li>
    <li><span class="card__item mir not-valid" title="Mir"><img src="./images/icons8-mir-48.png" alt=""></span></li>
    
    </ul>
    <form action="#" id="card__form" class="card__form" >
    <input class="card__number" id="card_number" type="text" placeholder="Credit card number">
    <button class="card__button" id="submitform" >Click to Validate</button>
      </form>
  </div> `
})

test.each([
  ['mir', true, '2202235433732147', 'input-valid'],
  ['visa', true, '4278444840597105', 'input-valid'],
  ['error', true, '6761589493205874', 'input-not-valid'],
  ['mastercard', true, '5360299162499025', 'input-valid'],
  ['not 16', true, '53602991624580257', 'input-not-valid']
])('test %s', (name, exepted, card, isValid) => {
  const DOMControl = require('../componenst/DomControl').default
  const dom = new DOMControl()

  const ev = new Event('submit')
  dom.input.value = card
  dom.form.dispatchEvent(ev)
  expect(dom.input.classList.contains(isValid)).toBe(exepted)
})
