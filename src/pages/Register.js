import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import AboutImage from "../assets/images/about-us.jpg";
import Loading from "../components/Loading";
import Message from "../components/Message";
import { Link } from "react-router-dom";

const Register = (props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const { signup } = useAuth();

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// do validation
		if (password !== confirmPassword) {
			setError("Passwords didn't match");
			return;
		}
		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}
		if (password.search(/[a-z]/i) < 0) {
			setError("Password must contain at least one letter.");
			return;
		}
		if (password.search(/[0-9]/) < 0) {
			setError("Password must contain at least one digit.");
			return;
		}

		// generate username from email
		const username = email.split("@")[0];

		// signup
		try {
			setError("");
			setLoading(true);
			await signup(email, password, username);
			history.push("/");
		} catch (err) {
			setError("Faild to create an account");
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="py-16">
			<section className="wrapper flex flex-col md:flex-row items-center md:justify-between">
				<div className="hero-text w-full md:w-4/12 px-2">
					<h4 className="text-2xl font-semibold text-red-400 text-center mb-4">
						Create Account
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
						<div className="mb-3">
							<input
								type="password"
								name="confirmPassword"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								className="w-full rounded border p-3"
								placeholder="Confirm Password"
							/>
						</div>
						{loading ? (
							<Loading />
						) : (
							<button
								type="submit"
								className="bg-red-400 text-white rounded w-full font-semibold py-2 text-lg"
								disabled={loading}
							>
								Register
							</button>
						)}
					</form>
					<p className="text-center mt-4">
						Already have an account?{" "}
						<Link to="/login" className="text-red-400">
							Login here.
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

export default Register;
