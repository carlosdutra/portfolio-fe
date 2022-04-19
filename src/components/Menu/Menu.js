import React, { useState, useEffect } from "react";

import Anchor from "widgets/Anchor";
import Switcher from "widgets/Switcher";

import "./Menu.less";

import { LOAD_MENU } from "queries";
import { useQuery } from "@apollo/client";

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
				<div className="menu-links">
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
				</div>
				<Switcher />
			</nav>
		</div>
	);
};

export default Menu;
