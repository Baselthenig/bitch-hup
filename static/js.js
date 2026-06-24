const bookings = [];

const forms = document.querySelectorAll(".bitch-booking-form form");

forms.forEach(function(form){
form.addEventListener("submit" , function(e) {
    e.preventDefault();

const name = form.querySelector('input[type="text"]').value   
const phone = form.querySelector('input[type="number"]').value   
const date = form.querySelector('input[type="date"]').value  
const email = form.querySelector('input[type="email"]').value
const bitch = form.querySelector('input[type="hidden"]').value  

if (phone.length != 11){
   alert("its 11 numbers you dumbass")
   return;
}


const booking ={name,phone,date,email,bitch};

fetch ('/book',{method: 'post', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(booking)
})
.then(response => response.json())
.then(data => console.log(data))
alert("booking recieved")


}

)
})