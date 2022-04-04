import React from "react";

const SearchBar = ({ query, setQuery }) => {
	// const handleChange = (type) => {
	// 	return (e) => setQuery({ ...query, [type]: e.target.value });
	// };

	return (
		<section className="searchBar">
			<h5>Find available rooms:</h5>
			<form className="row g-3">
				{/* <div className="row mb-3">
					<label htmlFor="startDate" className="col-sm-2 col-form-label">
						Start:
					</label>
					<div className="col-sm-7">
						<input
							type="datetime-local"
							className="form-control"
							value={query}
							id="startDate"
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
				</div> */}

				{/* <div className="row mb-3">
					<label htmlFor="endDate" className="col-sm-2 col-form-label">
						End:
					</label>
					<div className="col-sm-7">
						<input
							type="datetime-local"
							className="form-control"
							id="endDate"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
				</div> */}
				{/* 
				<div className="row mb-3">
					<label htmlFor="startDate" className="col-sm-2 col-form-label">
						Floor:
					</label>
					<div className="col-sm-7">
						<input
							type="text"
							className="form-control"
							value={query}
							id="floor"
							// onChange={handleChange("floor")}
							// onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
				</div> */}

				<div className="row mb-3">
					<label htmlFor="capacity" className="col-sm-2 col-form-label">
						Capacity:
					</label>
					<div className="col-sm-7">
						<input
							type="number"
							className="form-control"
							id="capacity"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
				</div>

				<button type="submit" className="btn btn-primary shadow">
					Find
				</button>
			</form>
		</section>
	);
};

export default SearchBar;
