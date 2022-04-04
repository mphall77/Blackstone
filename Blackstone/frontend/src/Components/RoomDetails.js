import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsPeople, BsBuilding } from "react-icons/bs";

// COMPONENTS
import BookingForm from "./BookingForm.js";
import RoomBookingList from "./RoomBookingList.js";

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
		<>
			<section>
				<div className="card border-dark mb-2 ">
					<div className="card-body">
						<h5 className="card-title">{room.name}</h5>
						<p className="card-text">
							<BsPeople className="icon" /> Capacity: {room.capacity}
						</p>
						<p className="card-text">
							<BsBuilding className="icon" /> Floor: {room.floor}
						</p>
					</div>
				</div>
			</section>

			<BookingForm room={room} />

			<RoomBookingList room={room} />
		</>
	);
};

export default RoomDetails;
