import { Link } from "react-router-dom";
import { BsClock, BsBuilding, BsTrash } from "react-icons/bs";

const BookingCard = (props) => {
	const { id, meetingRoomId, meetingName, startDate, endDate, attendees } =
		props.booking;
	// const { id, name, capacity, floor } = room;

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
					<button
						type="button"
						className="btn btn-outline-danger btn-sm "
						onClick={() => props.handleClick(id)}
					>
						<BsTrash className="icon" style={{ color: "lightgrey" }} />
						Cancel
					</button>
				</div>
			</div>
		</Link>
	);
};

export default BookingCard;
