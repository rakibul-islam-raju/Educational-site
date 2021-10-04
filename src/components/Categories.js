import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	// useEffect
	useEffect(() => {
		fetch("./fakedb/category.json")
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);

	return (
		<section className="py-12 mt-16">
			<div className="wrapper">
				<h2 className="text-center text-gray-600 font-semibold">
					Choice favourite course from top category
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
					{categories.map((category) => (
						<CategoryCard key={category.id} category={category} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Categories;
