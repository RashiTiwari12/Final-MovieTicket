// import { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar/Navbar';
// // import cinema from ./cinema01.jpg
// // import cinemaImage from './cinema02.jpg';


// export default function UserProfile() {
//     const [reservedSeats, setReservedSeats] = useState([]);

//     // Fetch reserved seats data from the API
//     const fetchReservedSeats = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:8000/api/seats/?is_reserved=true');
//         const data = await response.json();
//         setReservedSeats(data);
//       } catch (error) {
//         console.error('Error fetching reserved seats data:', error);
//       }
//     };
  
   
//     useEffect(() => {
//       fetchReservedSeats();
//     }, []);
  
//     const handleClick = (seatNumber, category, price) => {
//       // Check if the seat is reserved
//       const isReserved = reservedSeats.some(seat => seat.seat_number === seatNumber);
//   console.log(reservedSeats)
//       // If reserved, do not proceed with handling the click
//       if (isReserved) {
//         console.log(`Seat ${seatNumber} is already reserved.`);
//         return;
//       }
//       console.log(`Seat ${seatNumber} is not already reserved.`);
//       // Handle the click for non-reserved seats
//       console.log(`Seat ${seatNumber} clicked. Category: ${category}, Price: ${price}`);
//     };
  
//     return (
//       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
//         <div>
//           <span id="A1" onClick={() => handleClick('A1', 'Gold', 100)}>A1</span>
//         </div>
//         <div>
//           <span id="A2" onClick={() => handleClick('A2', 'Gold', 100)}>A2</span>
//         </div>
//         <div>
//           <span id="A3" onClick={() => handleClick('A3', 'Gold', 100)}>A3</span>
//         </div>
//         <div>
//           <span id="X3" onClick={() => handleClick('X3', 'Gold', 100)}>X3</span>
//         </div>
//         {/* Add more seats as needed */}
//       </div>
//     );
//   };

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
// import cinema from ./cinema01.jpg
// import cinemaImage from './cinema02.jpg';
export default function UserProfile() {
    const [booking, setbooking] = useState([])

    useEffect(() => {

        fetch("http://127.0.0.1:8000/api/bookings/")
            .then((res) => res.json())
            .then((results) => {
                setbooking(results);
                console.log(results); // Move console.log here
            })
            .catch((error) => {
                console.error("Error fetching movies:", error);
            });
    }, []);

    return (

        <>

            <Navbar />

            <div className="row row-cols-1 row-cols-md-4 g-5" style={{ padding: '50px', background: "#191939" }}  >
                {booking.map((i) => (
                    <div className="col" key={i.id}>
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">{i.user}</h5>
                                <p className="card-text">
                                    {i.movie.title} {/* Accessing movie title */}
                                    {i.seats.length};


                                    <p> Seat numbers:</p>
                                    {i.seats.map((seat) => (
                                        <h3 key={seat.id}>{seat.seat_number}{seat.seat_numbers}</h3>

                                    ))}
                                    {i.isconfirmed ? (
                                        <div>Confirmed</div>
                                    ) : (
                                        <div>Not confirmed</div>
                                    )}
                                    {/* {i.isconfirmed} */}
                                    {i.total_cost}
                                    <p> {i.date}
                                    </p>
                                    <p>{i.movie_timing}</p>

                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>



            <div className="container">

            </div>
        </>
    )
}