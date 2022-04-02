import React, { useState, useEffect } from "react";
import api from "../api/database.js";

const RoomBookingList = ({ room }) => {
	const { id } = room;
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const fetchAllBookings = async () => {
			if (id) {
				try {
					const res = await api.get(`/meeting-rooms/${id}/bookings`);
					setBookings(res.data);
				} catch (err) {
					console.log(err);
				}
			}
		};
		fetchAllBookings();
	}, []);

	if (!id || !bookings.length) {
		return null;
	}

	return (
		<section>
			List of bookings for this room
			<div className="card">
				{bookings.map((booking) => {
					return <p key={booking.id}>{booking.meetingName}</p>;
				})}
			</div>
		</section>
	);
};

export default RoomBookingList;
