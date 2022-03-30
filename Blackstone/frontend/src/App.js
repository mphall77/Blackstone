import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";
import RoomsList from "./Components/RoomsList";
import BookingsList from "./Components/BookingsList";
import AddRoom from "./Components/AddRoom";

//PAGES
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Routes>
					{/* ROOMS */}
					<Route path="/" element={<Home />} />
					<Route path="/meeting-rooms" element={<RoomsList />} />
					<Route path="/add" element={<AddRoom />} />
					{/* <Route path="/meeting-rooms/:id" element={<RoomDetails />} /> */}
					{/* <Route
						path="/meeting-rooms/:id/bookings"
						element={<RoomBookingList />}
					/> */}

					{/* BOOKINGS */}
					<Route path="/bookings" element={<BookingsList />} />
					{/* <Route path="/bookings/:id" element={<BookingDetails />} /> */}

					{/* 404 */}
					<Route path="*" element={<FourOFour />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
