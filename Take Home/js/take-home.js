//let password = document.getElementById('password');
/*
function validPassword(){ 
    let password = document.getElementById('password');

    if(password.value.length >= 6 && password.value.length <= 20 && password.value.match(/^[a-zA-Z]/)){ 
        alert('Your Password has been Accepted');

    } else {
        alert('Your Password was Rejected'); 
    }

}; 

// validPassword(); 
*/


// New Attempt 
function validatePassword(){
    const password = document.getElementById('password'); 

    if (password.value.length >= 6 && password.value.length <=20 && password.value.match(/^[a-zA-Z]/)) {
        alert('Password Accepted!');
    }

    if (password.value.length < 6) {
        alert('Your password is too short. Needs to be between 6-20 characters.');
    }

    if (password.value.length > 20) {
        alert('Your password is too long. Needs to be between 6-20 characters.'); 
    }

    if (!password.value.match(/^[a-zA-Z]/)) {
        alert('Your password needs to start with a letter.');
    }
}

// validatePassword(); 


// Regex 
// match(/^[____]/)   
// ^ means starts with 
// Inside of brackets [] can be letters, numbers and/or special characters 


// Vinson's Example 
/*
function validatePassword(password){
    
    if (password.length < 6 || password.length > 20) {
        alert('not the correct length');
    }

    // regex for first character is a letter 
    if (!pasword.match(/^[a-zA-Z])) {
        alert('no letter');
    }

    // Or 
    // other example by character code 

    const firstCharCode = password.charCodeAt(0); 

    if (firstCharCode < 65 || firstCharCode > 122) {
        return alert('no letter first'); 
    }

    console.log(firstCharCode);

    alert('password is valid');
}

validatePassword('password'); 
validatePassword('abc'); 
validatePassword('1bcdef'); 

validatePassword('zbcdef'); 
validatePassword('1bcdefgt')
*/ 