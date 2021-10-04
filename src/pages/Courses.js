import { useState, useEffect } from "react";
import CourseCard from "../components/CourseCard";
import FilterBtn from "../components/FilterBtn";

const Courses = () => {
	const [courses, setCourses] = useState([]);
	const [displayCourse, setDisplayCourse] = useState([]);

	// useEffect
	useEffect(() => {
		fetch("./fakedb/courses.json")
			.then((res) => res.json())
			.then((data) => {
				setCourses(data);
				setDisplayCourse(data);
			});
	}, []);

	const handleFilter = (category) => {
		if (category.toLowerCase() === "all") {
			setDisplayCourse(courses);
		} else {
			const filteredCourse = courses.filter(
				(course) =>
					course.category.toLowerCase() === category.toLowerCase()
			);
			setDisplayCourse([...filteredCourse]);
		}
	};

	return (
		<div>
			<section className="py-24 mt-16">
				<div className="wrapper">
					<h2 className="text-center text-gray-600 font-semibold">
						Our courses
					</h2>
					<div className="flex justify-center mt-12 space-x-4">
						<FilterBtn text="All" handleFilter={handleFilter} />
						<FilterBtn
							text="Development"
							handleFilter={handleFilter}
						/>
						<FilterBtn text="Design" handleFilter={handleFilter} />
						<FilterBtn
							text="Marketing"
							handleFilter={handleFilter}
						/>
						<FilterBtn
							text="Photography"
							handleFilter={handleFilter}
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 md:grid-cols-4 gap-4 mt-16">
						{displayCourse.map((course) => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Courses;
