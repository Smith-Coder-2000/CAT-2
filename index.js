
var Name=document.getElementById('name');
var email=document.getElementById('email');
var branch=document.getElementById('branch');
var college=document.getElementById('college');
var state=document.getElementById('state');
var address=document.getElementById('address');
var age=document.getElementById('age');
var phno=document.getElementById('phno');
var username=document.getElementById('username');
var password=document.getElementById('password');
var span=document.getElementsByTagName('span');

    function validate(){
        const regex1= /^([a-z0-9\.-]+)@(university)\.(in)$/;
        const regex2= /^[a-zA-Z]+$/
        const regex3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
        const isValidLength = /^.{8,16}$/;
        const regex4=/^[0-9]{10}$/ ;
        //name validation
        if(Name.value.trim().length<3){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="length should be greater than two";
            span[1].className="invalid-feedback";
            return false
        }
        else if(!regex2.test(Name.value.trim())){
            $("#name").addClass("is-invalid")
            $("#name").removeClass("is-valid")
            span[1].innerText="special characters are not allowed";
            span[1].className="invalid-feedback";
            return false
        }
        else if(!regex1.test(email.value.trim())){
            $("#email").addClass("is-invalid")
            $("#email").removeClass("is-valid")
            span[2].innerText="invalid email";
            span[2].className="invalid-feedback";
            return false
        }
        else if(branch.value.length<=2){
            $("#branch").addClass("is-invalid")
            $("#branch").removeClass("is-valid")
            span[3].innerText="invalid input";
            span[3].className="invalid-feedback";
            return false
        }
        else if(college.value.length<=2){
            $("#college").addClass("is-invalid")
            $("#college").removeClass("is-valid")
            span[4].innerText="invalid input";
            span[4].className="invalid-feedback";
            return false
        }
        else if(state.value.length<=2){
            $("#state").addClass("is-invalid")
            $("#state").removeClass("is-valid")
            span[5].innerText="invalid input";
            span[5].className="invalid-feedback";
            return false
        }
        else if(address.value.trim().length<=8){
            $("#address").addClass("is-invalid")
            $("#address").removeClass("is-valid")
            span[6].innerText="enter valid address";
            span[6].className="invalid-feedback";
            return false   
        }
        else if(age.value.trim().length==0 || age.value.trim()<1){
            $("#age").addClass("is-invalid")
            $("#age").removeClass("is-valid")
            span[7].innerText="invalid input";
            span[7].className="invalid-feedback";
            return false
        }
        else if(!regex4.test(phno.value.trim())){
            $("#phno").addClass("is-invalid")
            $("#phno").removeClass("is-valid")
            span[8].innerText="enter valid number";
            span[8].className="invalid-feedback";
            return false   
        }
        else if(username.value.trim().length<=3){
            $("#username").addClass("is-invalid")
            $("#username").removeClass("is-valid")
            span[9].innerText="invalid username";
            span[9].className="invalid-feedback";
            return false
        }
        else if(!regex3.test(password.value.trim()) && !isValidLength.test(password.value.trim())){
            $("#password").addClass("is-invalid")
            $("#password").removeClass("is-valid")
            span[10].innerText=`a minimum of 1 lower case letter [a-z] \n a minimum of 1 upper case letter [A-Z] \n a minimum of 1 numeric character [0-9] \n 1 special character: ~'!@#$%^&*()-_+={}[]|\;:"<>,./?'`;
            span[10].className="invalid-feedback";
            return false
        }
        else{
            setCookie("username",username.value,30)
            setCookie("email",email.value,30)
            setlocal(email.value,phno.value)
            return true
        }
}

Name.onkeyup=function(){
    const regex2= /^[a-zA-Z]+$/
    if(Name.value.trim().length<3){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="length should be greater than two";
        span[1].className="invalid-feedback";
    }
    else if(!regex2.test(Name.value.trim())){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[1].innerText="special characters are not allowed";
        span[1].className="invalid-feedback";
    }
    else{
        Name.value=Name.value.charAt(0).toUpperCase() + Name.value.slice(1);
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
        span[1].innerText="looks good";
        span[1].className="valid-feedback";
        email.disabled=false;
    }
}

email.onkeyup=function()
    {
        const regex1= /^([a-z0-9\.-]+)@(university)\.(in)$/;
        if(regex1.test(email.value.trim()))
        {

                $("#email").addClass("is-valid")
                $("#email").removeClass("is-invalid")
                span[2].innerText="looks good";
                span[2].className="valid-feedback";
                branch.disabled=false;
        }
        else{
                $("#email").addClass("is-invalid")
                $("#email").removeClass("is-valid")
                span[2].innerText="invalid email";
                span[2].className="invalid-feedback";
        }
    }

branch.onkeyup=function(){
    if(branch.value.length<=2){
        $("#branch").addClass("is-invalid")
        $("#branch").removeClass("is-valid")
        span[3].innerText="invalid input";
        span[3].className="invalid-feedback";
    }
    else{
        $("#branch").addClass("is-valid")
        $("#branch").removeClass("is-invalid")
        span[3].innerText="looks good";
        span[3].className="valid-feedback";
        college.disabled=false;
    }
}

college.onkeyup=function(){
    if(college.value.length<=2){
        $("#college").addClass("is-invalid")
        $("#college").removeClass("is-valid")
        span[4].innerText="invalid input";
        span[4].className="invalid-feedback";
    }
    else{
        $("#college").addClass("is-valid")
        $("#college").removeClass("is-invalid")
        span[4].innerText="looks good";
        span[4].className="valid-feedback";
        state.disabled=false;
    }
}

state.onkeyup=function(){
    if(state.value.length<=2){
        $("#state").addClass("is-invalid")
        $("#state").removeClass("is-valid")
        span[5].innerText="invalid input";
        span[5].className="invalid-feedback";
    }
    else{
        $("#state").addClass("is-valid")
        $("#state").removeClass("is-invalid")
        span[5].innerText="looks good";
        span[5].className="valid-feedback";
        address.disabled=false;
    }
}

address.onkeyup=function(){
    if(address.value.trim().length<=8){
        $("#address").addClass("is-invalid")
        $("#address").removeClass("is-valid")
        span[6].innerText="enter valid address";
        span[6].className="invalid-feedback";  
    }
    else{
        $("#address").addClass("is-valid")
        $("#address").removeClass("is-invalid")
        span[6].innerText="looks good";
        span[6].className="valid-feedback";
        age.disabled=false;
    }
}

age.onkeyup=function(){
    if(age.value.trim().length==0 || age.value.trim()<1){
        $("#age").addClass("is-invalid")
        $("#age").removeClass("is-valid")
        span[7].innerText="invalid input";
        span[7].className="invalid-feedback";
        return false
    }
    else{
        $("#age").addClass("is-valid")
        $("#age").removeClass("is-invalid")
        span[7].innerText="looks good";
        span[7].className="valid-feedback";
        phno.disabled=false;
    }
}

phno.onkeyup=function(){
    const regex4=/^[0-9]{10}$/;
    if(!regex4.test(phno.value.trim())){
        $("#phno").addClass("is-invalid")
        $("#phno").removeClass("is-valid")
        span[8].innerText="enter valid number";
        span[8].className="invalid-feedback"; 
    }
    else{
        $("#phno").addClass("is-valid")
        $("#phno").removeClass("is-invalid")
        span[8].innerText="looks good";
        span[8].className="valid-feedback";
        username.disabled=false;
    }
}

username.onkeyup=function(){
    if(username.value.trim().length<=3){
        $("#username").addClass("is-invalid")
        $("#username").removeClass("is-valid")
        span[9].innerText="invalid username";
        span[9].className="invalid-feedback";
        return false
    }
    else{
        $("#username").addClass("is-valid")
        $("#username").removeClass("is-invalid")
        span[9].innerText="looks good";
        span[9].className="valid-feedback";
        password.disabled=false;
    }
}

password.onkeyup=function(){
    const regex3 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
    const isValidLength = /^.{8,16}$/;
    if(regex3.test(password.value.trim()) && isValidLength.test(password.value.trim())){
        $("#password").addClass("is-valid")
        $("#password").removeClass("is-invalid")
        span[10].innerText="looks good";
        span[10].className="valid-feedback";
    }
    else{
        $("#password").addClass("is-invalid")
        $("#password").removeClass("is-valid")
        span[10].innerText=`a minimum of 1 lower case letter [a-z] \n a minimum of 1 upper case letter [A-Z] \n a minimum of 1 numeric character [0-9] \n 1 special character: ~'!@#$%^&*()-_+={}[]|\;:"<>,./?'`;
        span[10].className="invalid-feedback";
    }
}



function numlock(event)
{
    let code=event.which;
    if(code>47&&code<58)
    return false;
    else
    return true;
}

function alplock(event){
    let code=event.which;
    if(code>=65&&code<=90||code>=97&&code<=122){
        return false;
    }
    else{
        return true;
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setlocal(email, phno){
    localStorage.setItem("Email", email);
    localStorage.setItem("phno", phno);
}