import Luhn from "../componenst/algorithmLuhn/algorithmLuhn";


test.each([
    ['mir', true,'2202235433732147'],  
    ['visa', true,'4278444840597105'],  
    ['mastercard',true,'5360299162499025'],  
    ['error',false,'53602991624580257'],  
])('test /s', (name, exepted, card ) =>{
    const result=  new Luhn(card);
    expect(result.valid).toBe(exepted)
}) 

