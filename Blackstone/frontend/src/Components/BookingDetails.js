import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsClock, BsBuilding, BsTrash } from "react-icons/bs";

// COMPONENTS
import EmptyList from "./EmptyList";

const BookingDetails = ({ bookings, rooms, getBookingId }) => {
	const [booking, setBooking] = useState({});
	const [room, setRoom] = useState({});

	let { id } = useParams();
	let navigate = useNavigate();

	const deleteBooking = (id) => {
		getBookingId(id);
		navigate("/rooms");
	};

	useEffect(() => {
		const singleBooking = async () => {
			try {
				const res = await bookings.filter(
					(booking) => booking.id === Number(id)
				);
				setBooking(res[0]);
				if (res[0]) {
					const roomRes = await rooms.filter(
						(room) => room.id == Number(res[0]["roomId"])
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
			<h5>Booking Details</h5>
			<div className="card border-dark mb-2">
				<div className="card-body">
					<h4>{booking.meetingName}</h4>
					{/* <p className="card-text">{room.name}</p> */}
					<p className="card-text">
						<BsClock className="icon" /> Start:{" "}
						{new Date(booking.startDate).toLocaleString()}
					</p>
					<p className="card-text">
						<BsClock className="icon" /> End:{" "}
						{new Date(booking.endDate).toLocaleString()}
					</p>
					<p className="card-text">
						{/* <BsBuilding className="icon" /> Floor: {room.floor} */}
					</p>
				</div>
				<button
					type="button"
					className="btn btn-outline-danger btn-sm "
					onClick={() => deleteBooking(id)}
				>
					<BsTrash className="icon" style={{ color: "lightgrey" }} />
					Cancel
				</button>
			</div>
		</section>
	);
};

export default BookingDetails;
