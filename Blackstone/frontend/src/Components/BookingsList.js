import React from "react";
import BookingCard from "./BookingCard";

const BookingsList = (props) => {
	const deleteBooking = (id) => {
		props.getBookingId(id);
	};

	return (
		<section>
			{props.bookings.map((booking) => {
				return (
					<BookingCard
						booking={booking}
						key={booking.id}
						handleClick={deleteBooking}
					/>
				);
			})}
		</section>
	);
};

export default BookingsList;
