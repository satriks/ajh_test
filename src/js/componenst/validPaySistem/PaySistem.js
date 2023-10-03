export default class PaySistem {
    constructor(cardNumber){
        this.cardNumber = [ ...cardNumber]
        this.valaiblePaySistem = {'22': 'mir', '4': 'visa', '5': 'mastercard'}
        this.paySistem = null
        this.isValid()
    }
    isValid(){
        switch (this.cardNumber[0]) {
            case '4':
                if (this.cardNumber.length == 16){
                    this.paySistem = this.valaiblePaySistem['4']
                    return;
                }
            case '5':
                if (this.cardNumber.length == 16 || this.cardNumber.length == 18){
                    this.paySistem = this.valaiblePaySistem['5']
                    return;
                }
            case '2':
                if (this.cardNumber[1] == '2' && this.cardNumber.length == 16){
                    this.paySistem = this.valaiblePaySistem['22']
                }else{this.paySistem = 'undefined'}
                     return;
            default:
                this.paySistem = 'undefined'
                return;
        }
    }
}
