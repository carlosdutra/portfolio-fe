import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ShowCaseItem.less";

import Anchor from "widgets/Anchor";

import { useQuery } from "@apollo/client";
import { LOAD_PROJECT } from "queries";

import { motion } from "framer-motion";
import { AnimationProps } from "animation";

const ShowCaseItem = () => {
	const { slug } = useParams();
	const navigate = useNavigate();

	const { loading, error, data } = useQuery(LOAD_PROJECT, {
		variables: { slug },
	});
	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		if (error) console.log(error);
		setApiData(data?.projects?.data[0].attributes);
		window.scrollTo(0, 0);
	}, [data]);

	if (loading) return false;

	return (
		<motion.div {...AnimationProps} key="showcaseitem">
			<div className="showcase--item">
				<div className="showcase--item-content">
					<button
						onClick={() => navigate("work")}
						className="btn btn-simple"
					>
						<span className="material-icons">&#xe5c4;</span> Go back
					</button>
					{apiData?.ProjectPartnerUrl && (
						<div className="mt-l">
							<h2>IN PARTNERSHIP WITH</h2>
							<a href={apiData?.ProjectPartnerUrl} target="_blank">
								<img
									className="mt-s showcase--item-content-partnership"
									src={
										apiData?.ProjectPartnerLogo?.data?.attributes?.url
									}
								/>
							</a>
						</div>
					)}
					<div className="mt-l">
						<h2>THE CLIENT</h2>
						<h3 className="mt-m">{apiData?.ProjectName}</h3>
						<p className="mt-m mb-m">{apiData?.ProjectDescription}</p>
						<Anchor to={apiData?.ProjectURL} blank={true} btn={true}>
							Visit website
						</Anchor>
					</div>
					{apiData?.ProjectBrief && (
						<div className="mt-l">
							<h2>THE BRIEF</h2>
							<p>{apiData?.ProjectBrief}</p>
						</div>
					)}
				</div>
				<div className="showcase--item-image">
					<img src={apiData?.ProjectFullCapture?.data?.attributes?.url} />
				</div>
			</div>
			{apiData?.ProjectImages?.data.length > 0 && (
				<div className="showcase--media mt-l">
					<h1 className="h1">TAKE A BETTER LOOK</h1>
				</div>
			)}
		</motion.div>
	);
};

export default ShowCaseItem;
