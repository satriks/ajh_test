import PaySistem from "../componenst/validPaySistem/PaySistem";

test.each([
    ['mir', true,'2202235433732147'],  
    ['undefined', false,'2402235433732147'],  
    ['visa', true,'4278444840597105'],  
    ['undefined', false,'42784448405971'],  
    ['mastercard',true,'5360299162499025'],  
    ['undefined',false,'8660299162458025'],  
])('test /s status /s ', (name, status, card ) =>{
    const result=  new PaySistem(card);
    expect(result.paySistem).toBe(name)
}) 
