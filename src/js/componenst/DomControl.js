import Luhn from './algorithmLuhn/algorithmLuhn'
import PaySistem from './validPaySistem/PaySistem'

class DOMControl {
  constructor () {
    this.form = document.querySelector('.card__form')
    this.input = document.querySelector('.card__number')

    this.mir = document.querySelector('.mir')
    this.visa = document.querySelector('.visa')
    this.mastercard = document.querySelector('.master')

    this.form.addEventListener('submit', this.onSubmit)
  }

  onSubmit = (event) => {
    event.preventDefault()
    const value = this.input.value
    this.input.classList.remove('input-not-valid')
    this.input.classList.remove('input-valid')
    document.querySelectorAll('.card__item').forEach(el => el.classList.add('not-valid'))
    if (value.trim()) {
      const checkLuhn = new Luhn(value)
      const checkPaySistem = new PaySistem(value)
      if (checkLuhn.valid) {
        switch (checkPaySistem.paySistem) {
          case 'mir':
            this.mir.classList.remove('not-valid')
            this.input.classList.add('input-valid')

            break
          case 'visa':
            this.visa.classList.remove('not-valid')
            this.input.classList.add('input-valid')
            break
          case 'mastercard':
            this.mastercard.classList.remove('not-valid')
            this.input.classList.add('input-valid')
            break

          default:
            this.input.classList.add('input-not-valid')
            break
        }
      }
    }
  }
}

const widget = new DOMControl() // eslint-disable-line

// const data = {
//     'mir': '2202235433732147',
//     'visa':'4278444840597105' ,
//     'mastercard':'5360299162499025',
//     }
