import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AboutImage from "../assets/images/about-us.jpg";

const SingleCategory = () => {
	const { categoryId } = useParams();
	const [category, setCategory] = useState({});

	// useEffect
	useEffect(() => {
		console.log("UF");
		fetch("./fakedb/category.json")
			.then((res) => res.json())
			.then((result) => {
				const data = result.find(
					(cat) => cat.id === parseInt(categoryId)
				);
				setCategory(data);
			});
	}, [categoryId]);

	return (
		<div className="mt-24 py-16">
			<section className="wrapper flex flex-col md:flex-row items-center md:justify-between">
				<div className="hero-text w-full md:w-6/12 order-last md:order-first">
					<h2 className="font-semibold tracking-wider leading-tight text-center md:text-left md:text-start">
						<span className={`text-${category?.varient}-500`}>
							<i className={category?.icon}></i> {category?.name}
						</span>
					</h2>
					<p className="text-gray-600 text-lg mt-4">
						{category?.description}
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
				<div className="hero-image w-full md:w-6/12 order-first md:order-last">
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

export default SingleCategory;
