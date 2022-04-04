import React from "react";
import BookingCard from "./BookingCard";

const BookingsList = (props) => {
	return (
		<section>
			{props.bookings.map((booking) => {
				return <BookingCard booking={booking} key={booking.id} />;
			})}
		</section>
	);
};

export default BookingsList;
