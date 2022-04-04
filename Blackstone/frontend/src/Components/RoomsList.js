import React from "react";

// COMPONENTS
import RoomCard from "./RoomCard";
import SearchBar from "./SearchBar";

const RoomsList = ({ rooms }) => {
	return (
		<>
			<SearchBar />
			<section className="room-list">
				{rooms.map((room) => {
					return <RoomCard room={room} key={room.id} />;
				})}
			</section>
		</>
	);
};

export default RoomsList;
