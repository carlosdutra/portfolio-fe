import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowCaseItem.less";

import Anchor from "widgets/Anchor";

import { useQuery } from "@apollo/client";
import { LOAD_PROJECT } from "queries";

const ShowCaseItem = () => {
	const { slug } = useParams();

	const { loading, error, data } = useQuery(LOAD_PROJECT, {
		variables: { slug },
	});
	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		if (error) console.log(error);
		setApiData(data?.projects?.data[0].attributes);
	}, [data]);

	return (
		<div className="showcase--item">
			<div className="showcase--item-content">
				<h1>{apiData?.ProjectName}</h1>
				<p>{apiData?.ProjectDescription}</p>
				<Anchor to={apiData?.ProjectURL} blank={true}>
					Visit website
				</Anchor>
			</div>
			<div className="showcase--item-image">
				<img
					src={
						process.env.REACT_APP_URL +
						apiData?.ProjectFullCapture?.data?.attributes?.url
					}
				/>
			</div>
			{/* {apiData?.ProjectImages.data.map((image, index) => (
				<img
					className="showcase--item-image"
					key={index}
					src={process.env.REACT_APP_URL + image.attributes.url}
				/>
			))} */}
		</div>
	);
};

export default ShowCaseItem;
