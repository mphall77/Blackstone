import { Link } from "react-router-dom";
import { BsPeople, BsBuilding } from "react-icons/bs";

const RoomCard = ({ room }) => {
	const { id, name, capacity, floor } = room;

	return (
		<div className="card border-dark mb-2 rooms-list-card">
			<div className="card-body">
				<h5 className="card-title">
					<Link to={`/rooms/${id}`}>{name}</Link>
				</h5>
				<p className="card-text">
					<BsPeople /> Capacity: {capacity}
				</p>
				<p className="card-text">
					<BsBuilding /> Floor: {floor}
				</p>
			</div>
		</div>
	);
};

export default RoomCard;
