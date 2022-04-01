import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// const { uuid } = require("uuidv4");
import api from "./api/database.js";

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

	const deleteBooking = async (meetingRoomId) => {
		await api.delete(`/bookings/${meetingRoomId}`);
		const newBookingsList = bookings.filter((booking) => {
			return booking.meetingRoomId !== meetingRoomId;
		});
		setBookings(newBookingsList);
	};

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>
					{/* ROOMS */}
					<Route path="/" element={<Home />} />
					<Route path="/meeting-rooms" element={<RoomsList rooms={rooms} />} />
					<Route path="/add" element={<AddRoom rooms={rooms} />} />
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
