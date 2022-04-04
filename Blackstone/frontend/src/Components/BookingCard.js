import { Link } from "react-router-dom";
import { BsClock } from "react-icons/bs";

const BookingCard = (props) => {
	const { id, roomId, meetingName, startDate, endDate, attendees } =
		props.booking;

	return (
		<Link to={`/bookings/${id}`} style={{ textDecoration: "none" }}>
			<div className="card border-dark mb-2 bookings-list-card ">
				<div className="card-body">
					<h5 className="card-title">{meetingName}</h5>
					<p className="card-text">
						<BsClock className="icon" /> Start:{" "}
						{new Date(startDate).toLocaleString()}
					</p>
					<p className="card-text">
						<BsClock className="icon" /> End:{" "}
						{new Date(endDate).toLocaleString()}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default BookingCard;
