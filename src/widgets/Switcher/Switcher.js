import React, { useContext } from "react";
import "./Switcher.less";

import AppContext from "contexts/AppContext";

const Switcher = () => {
	const { darkMode, setDarkMode } = useContext(AppContext);

	const darkModeHandler = () => {
		sessionStorage.setItem("dark-mode", !darkMode);
		setDarkMode(!darkMode);
	};

	return (
		<div>
			<label className="switch">
				<input
					onChange={() => darkModeHandler()}
					type="checkbox"
					checked={darkMode ? true : false}
				/>
				<span className="slider round"></span>
			</label>
		</div>
	);
};

export default Switcher;
