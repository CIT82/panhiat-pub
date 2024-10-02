console.log("connected");
const FORM = document.getElementById("form");
const SENT = document.getElementById("sent");


FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const p = document.createElement('p');
    p.textContent=`Hello ${name} Thanks for your message ${message}`

    SENT.innerHTML = ''; 
    SENT.appendChild(p)
    FORM.reset()

})


const SUBFORM = document.getElementById("subform");
const MSG = document.getElementById("msg");

SUBFORM.addEventListener("submit", function(e){
    e.preventDefault();
    
    const email = e.target.email.value;
    const p = document.createElement('p');
    p.textContent=`Thank you for subscribing! You’ll now receive updates straight to your email ${email}`;

    MSG.innerHTML = ''; 
    MSG.appendChild(p);
    FORM.reset();

})
