import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.scss";

const NavBar = () => {
	return (
		<nav className="btn-group">
			<NavLink to={"/"} className="btn btn-primary " aria-current="page">
				Meeting Rooms
			</NavLink>
			<NavLink
				to={"/bookings"}
				className="btn btn-primary "
				aria-current="page"
			>
				Bookings
			</NavLink>
			<NavLink to={"/add"} className="btn btn-primary " aria-current="page">
				New Room
			</NavLink>
		</nav>
	);
};

export default NavBar;
