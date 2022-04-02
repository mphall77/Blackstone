import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/database.js";

const AddRoom = ({ rooms }) => {
	const [submitted, setSubmitted] = useState(false);
	const [room, setRoom] = useState({
		name: "",
		capacity: "",
		floor: "",
	});

	let navigate = useNavigate();

	const handleChange = (type) => {
		return (e) => setRoom({ ...room, [type]: e.target.value });
	};

	const addNewRoom = async (newRoom) => {
		const req = {
			...newRoom,
		};

		try {
			const res = await api.post(`/meetingRooms`, req);
			setRoom([res.data, ...rooms]);
			navigate("/meeting-rooms");
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		let res = addNewRoom(room);
		if (res.status.success === true) {
			setSubmitted(true);
		} else {
			alert("That did not Work. Please try again.");
		}
	};

	return (
		<section className="form_container">
			<h2>Create a Room</h2>

			<form>
				<div className="row mb-3">
					<label htmlFor="name" className="col-sm-2 col-form-label">
						Room Name:
					</label>
					<div className="col-sm-7">
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Boardroom 1"
							onChange={handleChange("name")}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="floor" className="col-sm-2 col-form-label">
						Floor:
					</label>
					<div className="col-sm-7">
						<input
							type="number"
							className="form-control"
							id="floor"
							placeholder="22"
							min="1"
							max="60"
							onChange={handleChange("floor")}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="capacity" className="col-sm-2 col-form-label">
						Capacity:
					</label>
					<div className="col-sm-7">
						<input
							type="number"
							className="form-control"
							id="capacity"
							placeholder="0"
							min="2"
							max="100"
							onChange={handleChange("capacity")}
						/>
					</div>
				</div>

				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
			{submitted && alert("Success! You have added a new Room.")}
		</section>
	);
};

export default AddRoom;
