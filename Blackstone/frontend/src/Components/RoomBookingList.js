import React, { useState, useEffect } from "react";
import api from "../api/database.js";

// COMPONENTS
import BookingCard from "./BookingCard.js";
import EmptyList from "./EmptyList";

const RoomBookingList = ({ room }) => {
	const { id } = room;
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const fetchAllBookings = async () => {
			if (id) {
				try {
					const res = await api.get(`/rooms/${id}/bookings`);
					setBookings(res.data);
				} catch (err) {
					console.log(err);
				}
			}
		};
		fetchAllBookings();
	}, [room]);

	return (
		<section>
			<h5>List of bookings for this room</h5>
			{!id || (bookings.length === 0 && <EmptyList />)}

			{bookings.length > 0 &&
				bookings.map((booking) => {
					return <BookingCard booking={booking} key={booking.id} room={room} />;
				})}
		</section>
	);
};

export default RoomBookingList;
