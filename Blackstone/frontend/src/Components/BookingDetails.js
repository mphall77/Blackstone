import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsClock, BsBuilding } from "react-icons/bs";

// COMPONENTS
import EmptyList from "./EmptyList";

const BookingDetails = ({ bookings, rooms }) => {
	const [booking, setBooking] = useState({});
	const [room, setRoom] = useState({});

	let { id } = useParams();

	useEffect(() => {
		const singleBooking = async () => {
			try {
				const res = bookings.filter((booking) => booking.id === Number(id));
				setBooking(res[0]);
				if (res[0]) {
					const roomRes = rooms.filter(
						(room) => room.id === res[0]["meeting-roomId"]
					);
					setRoom(roomRes[0]);
				}
			} catch (err) {
				console.log(err);
			}
		};

		singleBooking();
	}, [id, bookings, rooms]);

	if (!booking) {
		return <EmptyList />;
	}
	return (
		<section>
			BookingDetails
			<div className="card border-dark mb-2">
				<h4>{booking.meetingName}</h4>
				<p className="card-text">{room.name}</p>
				<p className="card-text">
					<BsClock /> Start: {new Date(booking.startDate).toLocaleString()}
				</p>
				<p className="card-text">
					<BsClock /> End: {new Date(booking.endDate).toLocaleString()}
				</p>
				<p className="card-text">
					<BsBuilding /> Floor: {room.floor}
				</p>
			</div>
		</section>
	);
};

export default BookingDetails;
