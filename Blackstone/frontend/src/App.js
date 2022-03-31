import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import roomsData from "./data/rooms.json";
import bookingsData from "./data/bookings.json";

// COMPONENTS
import NavBar from "./Components/NavBar";
import RoomsList from "./Components/RoomsList";
import BookingsList from "./Components/BookingsList";
import AddRoom from "./Components/AddRoom";

//PAGES
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";

function App() {
	const [rooms, setRooms] = useState([]);
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const fetchAllRooms = async () => {
			try {
				let res = await roomsData;
				setRooms(res);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllRooms();
	}, []);

	useEffect(() => {
		const fetchAllBookings = async () => {
			try {
				let res = await bookingsData;
				setBookings(res);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllBookings();
	}, []);

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>
					{/* ROOMS */}
					<Route path="/" element={<Home />} />
					<Route path="/meeting-rooms" element={<RoomsList rooms={rooms} />} />
					<Route path="/add" element={<AddRoom />} />
					{/* <Route path="/meeting-rooms/:id" element={<RoomDetails />} /> */}
					{/* <Route
						path="/meeting-rooms/:id/bookings"
						element={<RoomBookingList />}
					/> */}

					{/* BOOKINGS */}
					<Route
						path="/bookings"
						element={<BookingsList bookings={bookings} />}
					/>
					{/* <Route path="/bookings/:id" element={<BookingDetails />} /> */}

					{/* 404 */}
					<Route path="*" element={<FourOFour />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
