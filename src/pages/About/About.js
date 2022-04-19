import React, { useState, useLayoutEffect } from "react";
import "./About.less";

import { useQuery } from "@apollo/client";
import { LOAD_TECHNOLOGIES } from "queries";

import { motion } from "framer-motion";
import { AnimationProps } from "animation";

const About = () => {
	const { loading, error, data } = useQuery(LOAD_TECHNOLOGIES);
	const [apiData, setApiData] = useState(null);

	useLayoutEffect(() => {
		if (error) console.log(error);
		setApiData(data?.about?.data?.attributes?.Techonologies);
	}, [data]);

	return (
		<motion.section
			className="showcases-technologies"
			{...AnimationProps}
			key="showcase"
		>
			{apiData?.map((t, index) => (
				<i key={index} className={t.Name}></i>
			))}
		</motion.section>
	);
};

export default About;
