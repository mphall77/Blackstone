import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";
import api from "./api/database.js";

// COMPONENTS
import NavBar from "./Components/NavBar";
import RoomsList from "./Components/RoomsList";
import BookingsList from "./Components/BookingsList";
import AddRoom from "./Components/AddRoom";
import RoomDetails from "./Components/RoomDetails.js";
import BookingDetails from "./Components/BookingDetails.js";

//PAGES
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";

function App() {
	const [rooms, setRooms] = useState([]);
	const [bookings, setBookings] = useState([]);

	const getRooms = async () => {
		const res = await api.get("/rooms");
		return res.data;
	};

	useEffect(() => {
		const getAllRooms = async () => {
			try {
				const allRooms = await getRooms();
				if (allRooms) setRooms(allRooms);
			} catch (err) {
				console.log(err);
			}
		};

		getAllRooms();
	}, []);

	useEffect(() => {
		const fetchAllBookings = async () => {
			try {
				let res = await api.get("/bookings");
				if (res) setBookings(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllBookings();
	}, []);

	const deleteBooking = async (id) => {
		var res = window.confirm("Are you sure you want to delete this?");
		if (res) {
			await api.delete(`/bookings/${id}`);
			const newBookingsList = bookings.filter((booking) => {
				return booking.id !== id;
			});
			setBookings(newBookingsList);
		}
	};

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>
					{/* ROOMS */}
					<Route path="/" element={<Home />} />
					<Route path="/rooms" element={<RoomsList rooms={rooms} />} />
					<Route path="/add" element={<AddRoom rooms={rooms} />} />
					<Route path="/rooms/:id" element={<RoomDetails rooms={rooms} />} />

					{/* BOOKINGS */}
					<Route
						path="/bookings"
						element={<BookingsList bookings={bookings} />}
					/>
					<Route
						path="/bookings/:id"
						element={
							<BookingDetails
								bookings={bookings}
								rooms={rooms}
								getBookingId={deleteBooking}
							/>
						}
					/>

					{/* 404 */}
					<Route path="*" element={<FourOFour />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
