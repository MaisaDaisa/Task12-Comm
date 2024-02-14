const checkout = JSON.parse(localStorage.getItem('checkout'));
console.log(checkout);

const details = document.querySelector('.details');
console.log(details);


function showDetails() {

    const seatNum = (checkout.details.seats).length;
    const price = checkout.details.price;
    details.innerHTML += `
        <h3>Order Details</h3>
        <p>Movie: <span id="movie">${checkout.title}</span></p>
        <p>Num Of Seats: <span id="seat-num">${seatNum}</span></p>
        <p>Total: <span id="total">${price}$</span></p>
    `
}

showDetails();

// Clear local storage --------------------------------

const button = document.querySelector('.return');

button.addEventListener('click', () => {
    localStorage.removeItem("checkout");
    window.open('index.html');
    }
)
