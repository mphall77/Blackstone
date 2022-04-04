import { Link } from "react-router-dom";
import { BsPeople, BsBuilding } from "react-icons/bs";

const RoomCard = ({ room }) => {
	const { id, name, capacity, floor } = room;

	return (
		<Link to={`/meeting-rooms/${id}`} style={{ textDecoration: "none" }}>
			<div className="card border-dark mb-2 overflow-scroll shadow ">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<p className="card-text">
						<BsPeople className="icon" /> Capacity: {capacity}
					</p>
					<p className="card-text">
						<BsBuilding className="icon" /> Floor: {floor}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default RoomCard;
