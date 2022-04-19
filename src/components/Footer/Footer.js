import "./Footer.less";

// import Anchor from "widgets/Anchor";

const Footer = () => {
	return (
		<div className="footer">
			{/* <Anchor to="mailto:carlos@cdutra.com">carlos@cdutra.com</Anchor>
			<Anchor to="https://www.linkedin.com/in/c-dutra/" blank={true}>
				LinkedIn
			</Anchor>
			<Anchor to="https://github.com/carlosdutra" blank={true}>
				Github
			</Anchor> */}
			<div>&copy; {new Date().getFullYear()}</div>
		</div>
	);
};

export default Footer;
