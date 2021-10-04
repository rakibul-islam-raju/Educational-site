import AboutImage from "../assets/images/about-us.jpg";

const About = () => {
	return (
		<div className="mt-24 py-16">
			<section className="wrapper flex items-center justify-between">
				<div className="hero-text w-full md:w-6/12">
					<h2 className="text-red-400 font-semibold tracking-wider leading-tight">
						Who we are ? <br /> and what do we do ?
					</h2>
					<p className="text-gray-600 text-lg mt-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quaerat, sint? Sed error voluptas tempore numquam
						asperiores vitae distinctio.
					</p>
					<ul className="text-gray-600 text-lg mt-4">
						<li className="flex items-center space-x-2">
							<i class="fas fa-arrow-circle-right text-red-400"></i>
							<span>Lorem ipsum dolor</span>
						</li>
						<li className="flex items-center space-x-2">
							<i class="fas fa-arrow-circle-right text-red-400"></i>
							<span>Consectetur adipisicing elit</span>
						</li>
						<li className="flex items-center space-x-2">
							<i class="fas fa-arrow-circle-right text-red-400"></i>
							<span>Sed error voluptas</span>
						</li>
						<li className="flex items-center space-x-2">
							<i class="fas fa-arrow-circle-right text-red-400"></i>
							<span>Tempore numquam asperiores</span>
						</li>
						<li className="flex items-center space-x-2">
							<i class="fas fa-arrow-circle-right text-red-400"></i>
							<span>Asperiores vitae distinctio</span>
						</li>
					</ul>
					<button className="primary-btn mt-8">
						Email Us
						<i class="fas fa-paper-plane ml-2"></i>
					</button>
				</div>
				<div className="hero-image w-full md:w-6/12">
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

export default About;
