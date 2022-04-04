import React from "react";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import "../Styles/NavBar.scss";

const NavBar = () => {
	return (
		<header>
			<nav className="navbar">
				<NavLink to={"/"} className="navbar__logo">
					<BiHome
						style={{ fontSize: "1.8rem", color: "white", marginLeft: "1rem" }}
					/>
				</NavLink>
				<div className="btn-group">
					<NavLink
						to={"/meeting-rooms"}
						className="btn btn-primary "
						aria-current="page"
					>
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
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
