import Anchor from "widgets/Anchor";
import "./Home.less";

const Home = () => {
	return (
		<div className="home">
			<div>
				<h1>Welcome</h1>
				<Anchor to="work" router={true} btn={true}>
					See my work
				</Anchor>
			</div>
		</div>
	);
};

export default Home;
