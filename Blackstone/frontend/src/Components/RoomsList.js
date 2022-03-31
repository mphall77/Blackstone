import React from "react";
import RoomCard from "./RoomCard";

const RoomsList = ({ rooms }) => {
	return (
		<section>
			RoomsList
			{rooms.map((room) => {
				return <RoomCard room={room} key={room.id} />;
			})}
		</section>
	);
};

export default RoomsList;
