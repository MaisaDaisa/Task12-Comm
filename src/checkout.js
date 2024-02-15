// DATA --------------------------------

const checkout = JSON.parse(localStorage.getItem("checkout"));
console.log(checkout);

// SELECTORS --------------------------------

const details = document.querySelector(".details");
const button = document.querySelector(".return");

// DISPLAY FUNCTIONS --------------------------------

function showDetails() {
	const seatNum = checkout.details.seats.length;
	const price = checkout.details.price;
	details.innerHTML += `
        <h3>Order Details</h3>
        <p>Movie: <span id="movie">${checkout.title}</span></p>
        <p>Num Of Seats: <span id="seat-num">${seatNum}</span></p>
        <p>Total: <span id="total">${price}$</span></p>
    `;
}

showDetails();

// Clear local storage --------------------------------

button.addEventListener("click", () => {
	localStorage.removeItem("checkout");
	window.open("index.html");
});
