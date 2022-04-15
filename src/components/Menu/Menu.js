import React from "react";

import { useQuery } from "@apollo/client";
import { LOAD_MENU } from "./queries";

const Menu = () => {
	const { loading, error, data } = useQuery(LOAD_MENU);

	const [apiData, setApiData] = useState(null);

	useEffect(() => {
		if (error) console.log(error);
		setApiData(data?.menuBar.data);
	}, [data]);

	return (
		<div>
			{apiData.map((item) => {
				return item;
			})}
		</div>
	);
};

export default Menu;
