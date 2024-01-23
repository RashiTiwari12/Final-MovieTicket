import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
// import cinema from ./cinema01.jpg
// import cinemaImage from './cinema02.jpg';



    // import cinema from ./cinema01.jpg
    // import cinemaImage from './cinema02.jpg';
   
   
 export default function BookingSummary() {
        const [booking, setbooking] = useState([])
        const params= useParams();
        const user=params.user;
        useEffect(() => {
    
            fetch("http://127.0.0.1:8000/api/bookings/"+user)
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
                                        <p>Number of seats:</p>
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


// const seatlist = [];

// for (let i = 0; i < selectedSeats.length; i++) {
//     seatlist.push(selectedSeats[i].seat_number);
// }

// console.log(seatlist); 

// const seatCost=1000
// const cost = selectedSeats.length * seatCost;
// const id = localStorage.getItem("id");
// const handleBooking = async (e) => {
//     e.preventDefault();
//     try {
//         const response = await fetch("http://127.0.0.1:8000/api/bookings/", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
         
            
            
            
//             body: JSON.stringify({ user:id, movie:movie_id, theater:theater_id, seats:seatlist, total_cost:cost}),
//         });
//         const responseData = await response.json();
//         console.log(responseData)
//         if (!responseData.access_token) {
//             alert("Login Failed");
//         } else {
//             localStorage.setItem("access_token", responseData.access_token);
//             localStorage.setItem("refresh_token", responseData.refresh_token);
//             localStorage.setItem("id", responseData.id);
            
//         }
//     } catch (error) {
//         console.error("Error logging in:", error);
//     }
// };

// <div>
// <span id="B1" onClick={() => handleClick("B1", "Silver", 150)}>B1</span>
// </div>
// <div>
// <span id="B2" onClick={() => handleClick("B2", "Silver", 150)}>B2</span>
// </div>
// <div>
// <span id="B3" onClick={() => handleClick("B3", "Silver", 150)}>B3</span>
// </div>
// <div>
// <span id="C1" onClick={() => handleClick("C1", "Diamond", 180)}>C1</span>
// </div>
// <div>
// <span id="C2" onClick={() => handleClick("C2", "Diamond", 180)}>C2</span>
// </div>
// <div>
// <span id="C3" onClick={() => handleClick("C3", "Diamond", 180)}>C3</span>
// </div>
// <div>
// <span id="D1" onClick={() => handleClick("D1", "Platinum", 250)}>D1</span>
// </div>
// <div>
// <span id="D2" onClick={() => handleClick("D2", "Platinum", 250)}>D2</span>
// </div>
// <div>
// <span id="D3" onClick={() => handleClick("D3", "Platinum", 250)}>D3</span>
// </div>
