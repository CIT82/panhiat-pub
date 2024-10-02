const FORM = document.getElementById("form");
const MSG = document.getElementById("msg");

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = e.target.email.value;
    const p = document.createElement('p');
    p.textContent=`Thank you for subscribing! You’ll now receive updates straight to your email ${email}`;

    MSG.innerHTML = ''; 
    MSG.appendChild(p);
    FORM.reset();

})
