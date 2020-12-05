const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementsByTagName('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',(event) =>{
    
    checkInputs();
    event.preventDefault();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(usernameValue ===''){
       
        setErrorfor(username,"Username cannot be blank");
    }
    else{
        //add success
        setSuccessfor(username);
    }

   if(emailValue ===''){
   
    setErrorfor(email,"email cannot be blank");
    }
   
    else{
        //add success
        setSuccessfor(email);
    }
    if(passwordValue ===''){
        
        setErrorfor(password,"password cannot be blank");
    }
    else{
        //add success
        setSuccessfor(password);
    }
    if (password2Value ===''){
        
        setErrorfor(password2," confirm password");
    }
    else if(passwordValue ==password2Value)
    {
        setErrorfor(password2 ,"password does not match");
    }
    else{
        //add success
        setSuccessfor(password2);
    }

    //success

}

function setErrorfor(input,message)
{
    const formitem = input.parent;
    const small= formitem.querySelector('small');


    small.innerHTML = message;

    formitem.className = "form-item success";
}
function setSuccessfor(input) 
{ 
    const formitem = input.parent;
    formitem.className = "form-item error";
}