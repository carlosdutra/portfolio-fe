import { Link } from "react-router-dom";

const Anchor = ({ router = false, blank = false, to, children }) => {
	if (!router) {
		if (blank) {
			return (
				<a
					className="widget-anchor widget-anchor-blank"
					href={to}
					target="_blank"
					rel="noreferrer"
				>
					{children}
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
