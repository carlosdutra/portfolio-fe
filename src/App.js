import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Components
import Menu from "components/Menu";
import Showcase from "components/Showcase";
import ShowCaseItem from "components/ShowCaseItem";
import Footer from "components/Footer";

// Pages
import Home from "pages/Home";

function App() {
	return (
		<div className="App">
			<div className="container">
				<Menu />
				<div className="content">
					<Routes>
						<Route index element={<Showcase />} />
						<Route path="work" element={<Showcase />} />
						<Route path={`work/:slug`} element={<ShowCaseItem />} />
						<Route path="about" element={<Home />} />
						<Route path="*" element={<Navigate to="work" />} />
					</Routes>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
