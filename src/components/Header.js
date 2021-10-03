import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="bg-red-400 text-white shadow fixed w-full top-0 z-50">
			<div className="wrapper">
				<div className="nav flex flex-wrap items-center justify-between py-4">
					<div className="brand w-4/12">
						<h4 className="text-2xl font-semibold tracking-wider">
							skill<span>IT</span>
						</h4>
					</div>
					<div className="menu w-4/12 float-right flex justify-end">
						<ul className="flex flex-wrap space-x-6 items-center text-lg">
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
								<Link className="nav-link" to="/service">
									Service
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/blog">
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
