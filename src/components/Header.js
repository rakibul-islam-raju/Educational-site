import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-red-400 text-white shadow fixed w-full top-0 z-50">
			<div className="wrapper">
				<div className="nav flex flex-col md:flex-row flex-wrap items-center justify-between py-4">
					<div className="brand w-full md:w-4/12">
						<h4 className="text-2xl font-semibold tracking-wider text-center md:text-left">
							<Link className="" to="/">
								skillIT
							</Link>
						</h4>
					</div>
					<div className="menu w-full md:w-8/12 flex justify-center md:justify-end">
						<ul className="flex flex-wrap flex-row space-x-6 items-center text-lg">
							<li>
								<Link className="nav-link" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/about">
									About
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/courses">
									Course
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/blogs">
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
