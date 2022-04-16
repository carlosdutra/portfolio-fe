import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Showcase.less";

import { useQuery } from "@apollo/client";
import { LOAD_PROJECTS } from "queries";

const Showcase = () => {
	const { loading, error, data } = useQuery(LOAD_PROJECTS);
	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		if (error) console.log(error);
		setApiData(data?.projects.data);
	}, [data]);

	return (
		<section className="showcases-list">
			{apiData?.map((s, index) => (
				<div>
					<Link to={`/work/${s.attributes.ProjectSlug}`}>
						<div
							className="showcases-list--item"
							style={{
								backgroundImage:
									"url(" +
									process.env.REACT_APP_URL +
									s.attributes.ProjectFullCapture?.data?.attributes
										?.url +
									")",
							}}
							key={index}
						>
							<h2>{s.attributes.ProjectName}</h2>
						</div>
					</Link>
				</div>
			))}
		</section>
	);
};

export default Showcase;
