import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.less";

// Components
import Menu from "components/Menu";
import Showcase from "components/Showcase";
import ShowCaseItem from "components/ShowCaseItem";
import Footer from "components/Footer";

// Pages
// import Home from "pages/Home";
import About from "pages/About";

// Context
import AppContext from "contexts/AppContext";

import { AnimatePresence } from "framer-motion";

function App() {
	const sessionStorageData =
		sessionStorage.getItem("dark-mode") === "false" ? false : true;
	const [darkMode, setDarkMode] = useState(sessionStorageData);

	const location = useLocation();

	return (
		<AppContext.Provider value={{ darkMode, setDarkMode }}>
			<div className={`App${darkMode ? " dark-mode" : ""}`}>
				<div className="container">
					<Menu />
					<div className="content mt-l">
						<AnimatePresence>
							<Routes key={location.pathname}>
								<Route index element={<Showcase />} />
								<Route path="work" element={<Showcase />} />
								<Route path={`work/:slug`} element={<ShowCaseItem />} />
								<Route path="about" element={<About />} />
								<Route path="*" element={<Navigate to="work" />} />
							</Routes>
						</AnimatePresence>
					</div>
					<Footer />
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
