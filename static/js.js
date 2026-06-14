const bookings = [];

const form = document.querySelector(".bitch-booking-form");

form.addEventListener("submit" , function(e) {
    e.preventDefault();

const name = form.querySelector('input[type="text"]').value   
const phone = form.querySelector('input[type="number"]').value   
const date = form.querySelector('input[type="date"]').value  
const email = form.querySelector('input[type="email"]').value  

const booking ={name,phone,date,email};

fetch ('/book',{method: 'post', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(booking)
})
.then(response => response.json())
.then(data => console.log(data))


}
)
