const CategoryCard = ({ category }) => {
	const { name, description, icon, varient } = category;
	return (
		<>
			<div
				className={`rounded p-6 bg-${varient}-100 group hover:bg-${varient}-500 transition duration-300 ease-in cursor-pointer`}
			>
				<div
					className={`icon bg-${varient}-500 p-4 inline-block rounded text-white group-hover:text-${varient}-500 group-hover:bg-white shadow transition duration-500 ease-in`}
				>
					<i className={icon}></i>
				</div>
				<h4 className="mt-4 text-gray-800 group-hover:text-white">
					{name}
				</h4>
				<p className="mt-4 text-gray-600 group-hover:text-white">
					{description}
				</p>
			</div>
		</>
	);
};

export default CategoryCard;
