import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/page-not-found.png";

const PageNotFound = () => {
	return (
		<div className="mt-16 py-16">
			<div className="wrapper">
				<img className="mx-auto" src={PageNotFoundImage} alt="" />
			</div>
			<div className="flex justify-center mt-8">
				<Link className="primary-btn" to="/">
					<i className="fa fa-arrow-left mr-2"></i>
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
