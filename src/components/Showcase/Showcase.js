import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./Showcase.less";

import { useQuery } from "@apollo/client";
import { LOAD_PROJECTS } from "queries";

import { motion } from "framer-motion";
// import { AnimationProps } from "animation";

const Showcase = () => {
	const { loading, error, data } = useQuery(LOAD_PROJECTS);
	const [apiData, setApiData] = useState(null);

	useLayoutEffect(() => {
		if (error) console.log(error);
		setApiData(data?.projects.data);
	}, [data]);

	const list = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	const item = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -100 },
	};

	return (
		<motion.section
			className="showcases-list"
			initial={false}
			animate="visible"
			variants={list}
			key="showcase"
		>
			{apiData?.map((s, index) => (
				<motion.div key={index} variants={item}>
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
				</motion.div>
			))}
		</motion.section>
	);
};

export default Showcase;
