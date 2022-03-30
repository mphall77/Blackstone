import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS

//PAGES
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/" element={<Home />} />
					{/* 404 */}
					<Route path="*" element={<FourOFour />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
