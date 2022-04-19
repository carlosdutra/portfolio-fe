import { Link } from "react-router-dom";

const Anchor = ({
	router = false,
	blank = false,
	to,
	btn = false,
	children,
}) => {
	if (!router) {
		if (blank) {
			return (
				<a
					className={`widget-anchor widget-anchor-blank${
						btn ? " btn" : ""
					}`}
					href={to}
					target="_blank"
					rel="noreferrer"
				>
					{children} <span className="material-icons">&#xE895;</span>
				</a>
			);
		} else {
			return (
				<a className="widget-anchor" href={to} target="_self">
					{children}
				</a>
			);
		}
	} else {
		return <Link to={to}>{children}</Link>;
	}
};

export default Anchor;
