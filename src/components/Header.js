import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Header = () => {
	const { currentUser, logout } = useAuth();

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
								<Link className="nav-link" to="/courses">
									Course
								</Link>
							</li>
							<li>
								<Link className="nav-link" to="/blogs">
									Blog
								</Link>
							</li>

							{!currentUser ? (
								<li>
									<Link
										className="bg-white text-red-400 rounded px-4 py-2 font-semibold hover:bg-red-300 hover:text-white transition-all duration-300 ease-linear"
										to="/login"
									>
										Login
									</Link>
								</li>
							) : (
								<>
									<li>
										<span className="nav-link font-bold border-none">
											{currentUser?.displayName}
										</span>
									</li>
									<li>
										{" "}
										<button
											onClick={logout}
											type="button"
											className="bg-white text-red-400 rounded px-4 py-2 font-semibold hover:bg-red-300 hover:text-white transition-all duration-300 ease-linear"
										>
											Logout
										</button>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
