const CourseCard = ({ course }) => {
	const { title, image, rating, views, price, author } = course;
	return (
		<>
			<div className="round p-4 rounded shadow border transform translate-y-0 hover:shadow-lg hover:-translate-y-6 transition duration-300 cursor-pointer">
				<img
					className="h-48 bg-gray-200 rounded mx-auto"
					src={image}
					alt={title}
				/>
				<div className="flex flex-wrap justify-between items-center mt-2 pb-1 border-b">
					<div className="">
						<i className="fa fa-star text-yellow-500"></i> {rating}
					</div>
					<div className="">
						<i className="fa fa-eye text-red-500"></i> {views}
					</div>
				</div>
				<h4 className="my-2 text-gray-900">{title}</h4>
				<div className="border-t flex flex-wrap items-center justify-between pt-1">
					<span className="text-blue-600">{author}</span>
					<span className="text-xl font-semibold text-red-500">
						$ {price}
					</span>
				</div>
			</div>
		</>
	);
};

export default CourseCard;
