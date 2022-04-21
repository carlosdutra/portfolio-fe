import React, { useState, useLayoutEffect } from "react";
import "./About.less";

import { useQuery } from "@apollo/client";
import { LOAD_ABOUT } from "queries";

import { motion } from "framer-motion";
import { AnimationProps } from "animation";

const About = () => {
	const { loading, error, data } = useQuery(LOAD_ABOUT);
	const [apiData, setApiData] = useState(null);

	useLayoutEffect(() => {
		if (error) console.log(error);
		setApiData(data?.about?.data?.attributes);
	}, [data]);

	if (loading) return false;

	return (
		<motion.section {...AnimationProps} key="showcase">
			<div className="hero">
				<h1 className="mb-m">{apiData?.Hero?.Heading}</h1>
				<p
					dangerouslySetInnerHTML={{ __html: apiData?.Hero?.SubHeading }}
				></p>
			</div>
			<div className="showcases-technologies">
				{apiData?.Techonologies?.map((t, index) => (
					<i key={index} className={t.Name}></i>
				))}
			</div>
		</motion.section>
	);
};

export default About;
