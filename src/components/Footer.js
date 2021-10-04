const Footer = () => {
	return (
		<div className="bg-gray-700 text-white py-6">
			<div className="wrapper flex flex-wrap items-center justify-between">
				<div className="w-6/12">
					<div>
						&copy; 2021{" "}
						<span className="hover:text-red-400 cursor-pointer">
							SkillIT
						</span>{" "}
						|{" "}
						<a
							className="hover:text-red-400"
							href="https://rakibul-islam-raju.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Rakibul Islam
						</a>
					</div>
				</div>
				<div className="w-6/12">
					<div className="social-links space-x-4 flex justify-end">
						<i className="fab fa-facebook-f hover:text-red-400 cursor-pointer"></i>
						<i className="fab fa-twitter hover:text-red-400 cursor-pointer"></i>
						<i className="fab fa-linkedin hover:text-red-400 cursor-pointer"></i>
						<i className="fab fa-instagram hover:text-red-400 cursor-pointer"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
