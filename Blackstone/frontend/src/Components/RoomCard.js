import { Link } from "react-router-dom";
import { BsPeople, BsBuilding } from "react-icons/bs";

const RoomCard = ({ room }) => {
	const { id, name, capacity, floor } = room;

	return (
		<div className="card rooms-list-card">
			<div className="card-body">
				<h5 className="card-title">
					<Link to={`/rooms/${room.id}`}>{room.name}</Link>
				</h5>
				<p className="card-text">
					<BsPeople /> Capacity: {room.capacity}
				</p>
				<p className="card-text">
					<BsBuilding /> Floor: {room.floor}
				</p>
			</div>
		</div>
	);
};

export default RoomCard;
