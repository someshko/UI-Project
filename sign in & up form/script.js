var signupbtn = document.getElementById("signupbtn");
var signinbtn = document.getElementById("signinbtn");
var namefield = document.getElementById("namefield");
var title = document.getElementById("title");

signinbtn.onclick = function(){
    namefield.style.maxHeight = "0";   
    title.innerHTML = "Sign In";
    signupbtn.classList.add("somesh");
    signinbtn.classList.remove("somesh");
}

signupbtn.onclick = function(){
    namefield.style.maxHeight = "60px";   
    title.innerHTML = "Sign Up";
    signupbtn.classList.remove("somesh");
    signinbtn.classList.add("somesh");
}