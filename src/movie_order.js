const layout = {
    rows:7, 
    seatsInRow: 12,
    seatsData : [
            [
                {id: 1, seat: "A1", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 2, seat: "A2", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 3, seat: "A3", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 4, seat: "A4", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 5, seat: "A5", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 6, seat: "A6", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 7, seat: "A7", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 8, seat: "A8", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 9, seat: "A9", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 10, seat: "A10", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 11, seat: "A11", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 12, seat: "A12", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
            ],
            [
                {id: 13, seat: "B1", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 14, seat: "B2", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 15, seat: "B3", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 16, seat: "B4", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 17, seat: "B5", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 18, seat: "B6", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 19, seat: "B7", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 20, seat: "B8", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 21, seat: "B9", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 22, seat: "B10", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 23, seat: "B11", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 24, seat: "B12", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
            ],
            [
                {id: 25, seat: "C1", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 26, seat: "C2", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 27, seat: "C3", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 28, seat: "C4", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 29, seat: "C5", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 30, seat: "C6", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 31, seat: "C7", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 32, seat: "C8", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 33, seat: "C9", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 34, seat: "C10", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 35, seat: "C11", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 36, seat: "C12", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
            ],
            [
                {id: 37, seat: "D1", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 38, seat: "D2", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 39, seat: "D3", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 40, seat: "D4", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 41, seat: "D5", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 42, seat: "D6", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 43, seat: "D7", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 44, seat: "D8", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 45, seat: "D9", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 46, seat: "D10", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 47, seat: "D11", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 48, seat: "D12", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
            ],
            [
                {id: 49, seat: "E1", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 50, seat: "E2", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 51, seat: "E3", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 52, seat: "E4", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 53, seat: "E5", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 54, seat: "E6", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 55, seat: "E7", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 56, seat: "E8", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 57, seat: "E9", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 58, seat: "E10", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 59, seat: "E11", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 60, seat: "E12", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
            ],
            [
                {id: 61, seat: "F1", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 62, seat: "F2", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 63, seat: "F3", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 64, seat: "F4", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 65, seat: "F5", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 66, seat: "F6", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 67, seat: "F7", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 68, seat: "F8", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 69, seat: "F9", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 70, seat: "F10", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 71, seat: "F11", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 72, seat: "F12", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
            ],
            [
                {id: 73, seat: "G1", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 74, seat: "G2", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 75, seat: "G3", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 76, seat: "G4", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 77, seat: "G5", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 78, seat: "G6", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 79, seat: "G7", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 80, seat: "G8", occupied: 1, price: Math.floor(Math.random() * 11) + 10},
                {id: 81, seat: "G9", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 82, seat: "G10", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 83, seat: "G11", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
                {id: 84, seat: "G12", occupied: 0, price: Math.floor(Math.random() * 11) + 10},
            ],
        ]
}

// INITIALIZE --------------------------------------------------------------

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const movie = JSON.parse(localStorage.getItem('movie'))
const container = document.querySelector('.container');


function showMovies(movie) {
    container.innerHTML = "";
        const movieTitle = movie.original_title;
        const moviePoster = movie.poster_path;

        const date = new Date(movie.release_date)
        const movieElm = document.createElement("div");


        
        container.innerHTML += `
            <div class="movie-img">
                <img src="${IMG_PATH+moviePoster}" alt="">
            </div>
            <div class="movie-content">
                <div class="movie-content-header">
                    <a href="#">
                        <h3 class="movie-title">${movieTitle}</h3>
                    </a>
                </div>
                <div class="ticket-container">
                    <ul class="showcase">
                        <li>
                            <div class="seat"></div>
                            <small>FREE</small>
                        </li>
                        <li>
                            <div class="seat selected"></div>
                            <small>SELECTED</small>
                        </li>
                        <li>
                            <div class="seat occupied"></div>
                            <small>OCCUPIED</small>
                        </li>
                    </ul>
                    <div class="seat-container">
                        <div class="screen"></div>
                        <!-- THINGS GO HERE -->
                    </div>
                    <p>You have selected <span id="count">0</span> seats for a price of $ <span id="total">0</span></p>
                    <div class="checkout">
                        <button class="checkout-btn">Checkout</button>
                    </div>    
                </div>
            </div>
          `
        container.appendChild(movieElm);

        const seatContainer = document.querySelector('.seat-container');
        const seatData = layout.seatsData;
        seatData.forEach(row => {
            const rowElm = document.createElement("div");
            rowElm.classList.add('row');
            row.forEach(seat => {
                const seatElm = document.createElement("div");
                seatElm.classList.add('seat');
                if(seat.occupied === 1) {
                    seatElm.classList.add('occupied');
                }
                seatElm.innerText =  `${seat.seat}`;
                rowElm.appendChild(seatElm);
            });
            seatContainer.appendChild(rowElm);
            
        });  
        console.log("FINISHED") 
}

showMovies(movie);

//  SEAT SELECTION --------------------------------------------------------------


const getSeatPrices = () => {
    let priceList = [];
    layout.seatsData.forEach(row => {
        row.forEach(seat => {
            priceList.push(seat.price);
        });
    });
    console.log(priceList)
    return priceList;
}

const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const seatPricesIndex = getSeatPrices();

// events ---------------------------------------------------------------------

seats.forEach(seat => {
    seat.addEventListener('click', e => {
        seat.classList.toggle('selected');
        updateSelectedCount();
    });
});



function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    let price = 0;
    seatsIndex.forEach(index => {
        price += seatPricesIndex[index];
    });
    console.log(price)
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = price;

    localStorage.setItem('selectedSeats', JSON.stringify({"price": price, "seats":seatsIndex}));
}

// CHECKOUT ---------------------------------------------------------------------

const checkoutBtn = document.querySelector('.checkout-btn');

checkoutBtn.addEventListener('click', e => {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats)
    if (selectedSeats.seats === null || selectedSeats.seats === '[]') {
        alert('Please select a seat');
    } else {
        const checkout = { id: movie.id, title: movie.original_title, details: selectedSeats};
        localStorage.removeItem('selectedSeats');
        localStorage.setItem('checkout', JSON.stringify(checkout));
        window.open('checkout.html', '_blank');
    }
})




