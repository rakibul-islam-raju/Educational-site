import { useState, useEffect } from "react";
import CoverImage from "../assets/images/cover-image.jpg";
import Categories from "../components/Categories";
import CourseCard from "../components/CourseCard";
import { useHistory } from "react-router-dom";

const Home = () => {
	const [courses, setCourses] = useState([]);
	const history = useHistory();

	// useEffect
	useEffect(() => {
		fetch("./fakedb/courses.json")
			.then((res) => res.json())
			.then((data) => {
				const topCourses = data.filter((item) => item.rating > 4.5);
				setCourses([...topCourses]);
			});
	}, []);

	const viewCourses = () => {
		history.push("/courses");
	};

	return (
		<div className="mt-24 py-16">
			{/* hero area */}
			<section className="wrapper flex flex-col md:flex-row items-center md:justify-between ">
				<div className="hero-text w-full md:w-6/12 order-last md:order-first">
					<h2 className="text-red-400 font-semibold tracking-wider leading-tight text-xl md:text-4xl text-center md:text-left">
						Learn more and make success the result of perfection.
					</h2>
					<p className="text-gray-600 text-lg mt-4 text-center md:text-left">
						Pick from over 100,000 online video courses with new
						additions published every month.
					</p>
					<div className="flex justify-center md:justify-start">
						<button className="primary-btn mt-8">Explore</button>
					</div>
				</div>
				<div className="hero-image w-full mb-6 md:mb-0 md:w-6/12 order-first md:order-last">
					<img
						className="bg-center bg-cover"
						src={CoverImage}
						alt="skillit"
					/>
				</div>
			</section>

			{/* categories */}
			<Categories />

			{/* Courses */}
			<section className="py-12 mt-16">
				<div className="wrapper">
					<h2 className="text-center text-gray-600 font-semibold">
						Get our top rated courses
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
						{courses.map((course) => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
					<div className="flex justify-center mt-8">
						<button
							onClick={viewCourses}
							className="primary-btn mt-8"
						>
							View All
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
