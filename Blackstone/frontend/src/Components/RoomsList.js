import React, { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTS
import RoomCard from "./RoomCard";
import SearchBar from "./SearchBar";
import EmptyList from "./EmptyList";

const RoomsList = ({ rooms }) => {
	const [query, setQuery] = useState("");
	const [filteredRooms, setFilteredRooms] = useState([]);
	const keys = ["floor", "capacity"];

	useEffect(() => {
		if (query && rooms.length > 0) {
			let filteredRoomsList = rooms.filter(
				(room) => room.capacity == query || room.floor == query
			);

			// let search = rooms.filter((room) =>
			// 	keys.some((key) => room[key] == query)
			// 	keys.some((key) => room[key].toString().includes(query))
			// );

			// setFilteredRooms(search);
			setFilteredRooms(filteredRoomsList);
		} else {
			setFilteredRooms([]);
		}
	}, [query]);

	return (
		<>
			<SearchBar setQuery={setQuery} query={query} />
			<section className="room-list">
				{query && filteredRooms.length === 0 && <EmptyList />}

				{query &&
					filteredRooms.map((room) => {
						return <RoomCard room={room} key={room.id} />;
					})}

				{!query &&
					rooms.length > 0 &&
					rooms.map((room) => {
						return <RoomCard room={room} key={room.id} />;
					})}
			</section>
		</>
	);
};

export default RoomsList;
