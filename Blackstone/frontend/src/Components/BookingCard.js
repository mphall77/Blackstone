import { BsClock, BsBuilding } from "react-icons/bs";

const BookingCard = (props) => {
	const { id, meeting_roomId, meetingName, startDate, endDate, attendees } =
		props.booking;
	// const { id, name, capacity, floor } = room;

	return (
		<div className="card border-dark mb-2 bookings-list-card">
			<div className="card-body">
				<h5 className="card-title">{meetingName}</h5>
				<p className="card-text">need to add meeting room name</p>
				<p className="card-text">
					<BsClock /> Start: {new Date(startDate).toLocaleString()}
				</p>
				<p className="card-text">
					<BsClock /> End: {new Date(endDate).toLocaleString()}
				</p>
				<p className="card-text">
					<BsBuilding /> Floor: "need to add floor from room data"
				</p>
				<button
					type="button"
					className="btn btn-outline-danger btn-sm"
					onClick={() => props.handleClick(id)}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default BookingCard;
