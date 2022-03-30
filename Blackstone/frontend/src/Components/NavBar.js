import React from "react";
import "../Styles/NavBar.scss";

const NavBar = () => {
	return (
		<div className="btn-group">
			<a href="#" className="btn btn-primary " aria-current="page">
				Meeting Rooms
			</a>
			<a href="#" className="btn btn-primary">
				Bookings
			</a>
			<a href="#" className="btn btn-primary">
				New Room
			</a>
		</div>
	);
};

export default NavBar;
