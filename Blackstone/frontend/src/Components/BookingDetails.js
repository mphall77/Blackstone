import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// COMPONENTS
import BookingsList from "./BookingsList";
import EmptyList from "./EmptyList";

const BookingDetails = ({ bookings }) => {
	const [booking, setBooking] = useState({});
	let { id } = useParams();

	useEffect(() => {
		const singleBooking = () => {
			try {
				const res = bookings.filter((booking) => booking.id === Number(id));
				console.log(res[0]);
				setBooking(res[0]);
			} catch (err) {
				console.log(err);
			}
		};

		singleBooking();
	}, [id, bookings]);

	if (!booking) {
		return <EmptyList />;
	}
	return (
		<section>
			BookingDetails
			<div className="card border-dark mb-2">
				<h4>{booking.meetingName}</h4>
				<p>{booking.startDate}</p>
				<p>{booking.endDate}</p>
			</div>
		</section>
	);
};

export default BookingDetails;
