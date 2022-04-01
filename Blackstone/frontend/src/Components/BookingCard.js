import { Link } from "react-router-dom";
import { BsClock, BsBuilding } from "react-icons/bs";

const BookingCard = ({ booking }) => {
	const { meetingRoomId, meetingName, startDate, endDate, attendees } = booking;
	// const { id, name, capacity, floor } = room;

	return (
		<div className="card border-dark mb-2 bookings-list-card">
			<div className="card-body">
				<h5 className="card-title">
					<Link to={`bookings/${meetingRoomId}`}>{meetingName}</Link>
				</h5>
				<p className="card-text">need to add meeting room name</p>
				<p className="card-text">
					<BsClock /> Start: {startDate}
				</p>
				<p className="card-text">
					<BsClock /> End: {endDate}
				</p>
				<p className="card-text">
					<BsBuilding /> Floor: "need to add floor from room data"
				</p>
				<button type="button" className="btn btn-outline-danger btn-sm">
					Cancel
				</button>
			</div>
		</div>
	);
};

export default BookingCard;
