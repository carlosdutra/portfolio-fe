import React, { useState, useEffect } from "react";

import Anchor from "widgets/Anchor";

import "./Menu.less";

import { useQuery } from "@apollo/client";
import { LOAD_MENU } from "queries";

const Menu = () => {
	const { loading, error, data } = useQuery(LOAD_MENU);

	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		if (error) console.log(error);
		setApiData(data?.menuBar.data.attributes.Items);
	}, [data]);

	return (
		<div className={`menu${!loading ? " active" : ""}`}>
			<nav>
				{apiData?.map((a, index) => (
					<Anchor
						router={a.Router}
						blank={a.OpenInNewTab}
						to={a.ItemURL}
						key={index}
					>
						{a.ItemLabel}
					</Anchor>
				))}
			</nav>
		</div>
	);
};

export default Menu;
