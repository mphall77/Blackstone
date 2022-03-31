import React from "react";
import BookingCard from "./BookingCard";

const BookingsList = ({ bookings }) => {
	return (
		<section>
			{bookings.map((booking) => {
				return <BookingCard booking={booking} key={booking.meetingRoomId} />;
			})}
		</section>
	);
};

export default BookingsList;
