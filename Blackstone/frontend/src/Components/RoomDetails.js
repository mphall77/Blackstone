import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import BookingForm from "./BookingForm.js";

const RoomDetails = ({ rooms }) => {
	const [room, setRoom] = useState({});
	let { id } = useParams();

	useEffect(() => {
		const singleRoom = () => {
			try {
				const res = rooms.filter((room) => room.id === Number(id));
				setRoom(res[0]);
			} catch (err) {
				console.log(err);
			}
		};

		singleRoom();
	}, [id, rooms]);

	if (!room) {
		return null;
	}

	return (
		<section>
			<div className="card room-info">
				<h4>{room.name}</h4>
				<p>{room.capacity}</p>
				<p>{room.floor}</p>
			</div>
			<div>
				<BookingForm room={room} />
			</div>
			<div>List of bookings for this room</div>
		</section>
	);
};

export default RoomDetails;
