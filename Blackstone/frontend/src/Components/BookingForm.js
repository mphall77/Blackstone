import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/database.js";

const BookingForm = ({ room }) => {
	const [bookingReq, setBookingReq] = useState({
		meetingName: "",
		startDate: "",
		endDate: "",
		attendees: "",
		roomId: `${room.id}`,
	});

	let navigate = useNavigate();

	const handleChange = (type) => {
		return (e) => setBookingReq({ ...bookingReq, [type]: e.target.value });
	};

	const addNewBooking = async (newBooking) => {
		const bookingRequest = {
			...newBooking,
		};

		try {
			let res = await api.post(`/bookings`, bookingRequest);
			navigate("/bookings");
			return res;
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewBooking(bookingReq);
	};

	return (
		<section>
			<h5>Book Rooom:</h5>
			<form>
				<div className="row mb-3">
					<label htmlFor="meetingName" className="col-sm-2 col-form-label">
						Meeting Name:
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="meetingName"
							placeholder="Team Summer -- Beach Party Planning"
							onChange={handleChange("meetingName")}
							required
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="startDate" className="col-sm-2 col-form-label">
						Start:
					</label>
					<div className="col-sm-10">
						<input
							type="datetime-local"
							className="form-control"
							id="startDate"
							onChange={handleChange("startDate")}
							required
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="endDate" className="col-sm-2 col-form-label">
						End:
					</label>
					<div className="col-sm-10">
						<input
							type="datetime-local"
							className="form-control"
							id="endDate"
							onChange={handleChange("endDate")}
							required
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="attendees" className="col-sm-2 col-form-label">
						Attendees:
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="attendees"
							onChange={handleChange("attendees")}
						/>
					</div>
				</div>

				<button
					onClick={handleSubmit}
					type="submit"
					className="btn btn-primary"
				>
					Submit
				</button>
			</form>
		</section>
	);
};

export default BookingForm;
