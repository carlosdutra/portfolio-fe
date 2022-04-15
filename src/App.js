import React, { useState, useEffect } from "react";
import "./App.css";

// import { useQuery } from "@apollo/client";
// import { LOAD_PROJECTS } from "./queries";

function App() {
	// const { loading, error, data } = useQuery(LOAD_PROJECTS);

	// const [apiData, setApiData] = useState(null);

	// useEffect(() => {
	// 	if (error) console.log(error);
	// 	setApiData(data?.projects.data);
	// }, [data]);

	return (
		<div className="App">
			{/* {loading && "Loading..."} */}
			{/* {apiData && apiData.projects} */}
		</div>
	);
}

export default App;
