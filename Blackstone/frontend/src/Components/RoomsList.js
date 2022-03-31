import React from "react";
import RoomCard from "./RoomCard";

const RoomsList = ({ rooms }) => {
	return (
		<section>
			{rooms.map((room) => {
				return <RoomCard room={room} key={room.id} />;
			})}
		</section>
	);
};

export default RoomsList;
