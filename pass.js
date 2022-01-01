'use strict';

//-------------------------------------DATA--------------------------------------------------

const lower_alphabets='abcdefghijklmnopqrstuvwxyz'.split('')

const upper_alphabets='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

const numbers='12345678901234567890'.split('')

const signs='!@#$%^&*()_+":?/~'.split('')


const pass_length=[5,10,15]

console.log(pass_length);


console.log('12345'.length);

//------------------------------------selection------------------------------------------------

const heading=document.querySelector('h1')
const inp=document.querySelector('input')
const btn=document.querySelector('.btn')
const pass_num=document.querySelector('.pass_num')




let final_password=''
btn.addEventListener('click',function(){
    
    let password_len=Number(pass_num.value)
    
    const grand=[...lower_alphabets,...upper_alphabets,...numbers,...signs].join('')
    console.log(`the grand length is ${grand.length}`);
    
    
    // console.log(pass_selector);

    if (password_len===0 ||password_len===''||password_len<0){
        inp.value='please type the Pass number'
        heading.textContent='select the number'
    }
    else{
        heading.textContent='PASSWORD GENERATOR'
        for (let n=0;n<password_len;n++){
            
            let pass_selector=Math.round(Math.random()*grand.length)
            console.log(pass_selector);
            
            // -----------fixing the bug 'undefined'------------------------------
            pass_selector=pass_selector==0?pass_selector:pass_selector
            pass_selector=pass_selector==89?pass_selector-1:pass_selector
            console.log(`after ${pass_selector}`);
            
            
            
            let new_ele=grand[pass_selector]
            
            final_password+=new_ele
        }
    }
    
    console.log(final_password);

    inp.value=final_password
    
    
    final_password=''
    
})

// console.log(final_password);
