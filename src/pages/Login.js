import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import AboutImage from "../assets/images/about-us.jpg";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	const { googleLogin, login } = useAuth();

	const { state = {} } = props.location;
	const { prevLocation } = state;

	const history = useHistory();
	const redirectUrl = prevLocation || "/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			await login(email, password);
			history.push(redirectUrl);
		} catch (error) {
			setError("Uesr not found.");
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	// google login
	const handleGoogleSignin = async () => {
		console.log("google login");
		try {
			setError("");
			setLoading(true);
			await googleLogin();
			history.push(redirectUrl);
		} catch (error) {
			setError("Faild to login");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="py-16">
			<section className="wrapper flex flex-col md:flex-row items-center md:justify-between">
				<div className="hero-text w-full md:w-4/12 px-2">
					<h4 className="text-2xl font-semibold text-red-400 text-center mb-4">
						Sign In
					</h4>
					<form onSubmit={handleSubmit}>
						{error && (
							<div className="my-4">
								<Message color="red" text={error} />
							</div>
						)}
						<div className="mb-3">
							<input
								type="email"
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full rounded border p-3"
								placeholder="Email Address"
							/>
						</div>
						<div className="mb-3">
							<input
								type="password"
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full rounded border p-3"
								placeholder="Password"
							/>
						</div>

						{loading ? (
							<Loading />
						) : (
							<>
								<button
									type="submit"
									className="bg-red-400 text-white rounded w-full font-semibold py-2 text-lg"
									disabled={loading}
								>
									Login
								</button>
								<button
									onClick={handleGoogleSignin}
									type="button"
									className="text-red-400 bg-gray-100 shadow rounded w-full font-semibold py-2 text-lg mt-3"
									disabled={loading}
								>
									Google Login
								</button>
							</>
						)}
					</form>
					<p className="text-center mt-4">
						Need an account?{" "}
						<Link to="/register" className="text-red-400">
							Create account.
						</Link>
					</p>
				</div>
				<div className="hero-image w-full md:w-8/12">
					<img
						className="bg-center bg-cover"
						src={AboutImage}
						alt="skillit"
					/>
				</div>
			</section>
		</div>
	);
};

export default Login;
