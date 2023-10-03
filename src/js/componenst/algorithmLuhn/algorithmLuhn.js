class Luhn{
    constructor(cardNumber){
        this.cardNumber = [ ...cardNumber]
        this.test = 1
        this.valid = this.isValid()
    }

    isValid(){
        let result = 0
        for (const index of Array.from(this.cardNumber.keys())){
            let double =   Number(this.cardNumber[index])
            let odd = !(index % 2)
            if (this.cardNumber.length % 2){
                odd = (index % 2)
            } 
            if (odd){
                double = double * 2
                if (double > 9){
                    double -= 9
                }
            }
            result += double    
            
        }
        console.log(result);
        if (result % 10){
            this.valid = false
            return false;
        }
        this.valid = true
        return true
        
    }
}

var luhn_validate = function(imei){
    return !/^\d+$/.test(imei) || (imei.split('').reduce(function(sum, d, n){ 
            return sum + parseInt(((n + imei.length) %2)? d: [0,2,4,6,8,1,3,5,7,9][d]);
        }, 0)) % 10 == 0;
};
// '2204579116913557'
// '4111111111111111
const card = new Luhn('3528521586761407')
card.isValid()
console.log(card.valid);
console.log(luhn_validate('3528521586761407'));