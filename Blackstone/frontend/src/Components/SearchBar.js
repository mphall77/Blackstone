import React from "react";

const SearchBar = ({ query, setQuery }) => {
	return (
		<section className="searchBar">
			<h5>Find available rooms:</h5>
			<form className="row g-3">
				<div className="row mb-3">
					<label htmlFor="startDate" className="col-sm-2 col-form-label">
						Start:
					</label>
					<div className="col-sm-7">
						<input
							type="datetime-local"
							className="form-control"
							value={query}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="endDate" className="col-sm-2 col-form-label">
						End:
					</label>
					<div className="col-sm-7">
						<input
							type="datetime-local"
							className="form-control"
							value={query}
						/>
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="startDate" className="col-sm-2 col-form-label">
						Floor:
					</label>
					<div className="col-sm-7">
						<input type="text" className="form-control" value={query} />
					</div>
				</div>

				<div className="row mb-3">
					<label htmlFor="startDate" className="col-sm-2 col-form-label">
						Capacity:
					</label>
					<div className="col-sm-7">
						<input type="number" className="form-control" value={query} />
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
