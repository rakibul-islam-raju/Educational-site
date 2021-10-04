const Blog = ({ blog }) => {
	const { title, image, category, author, content } = blog;
	return (
		<>
			<div className="flex flex-col md:flex-row rounded p-2 shadow space-x-4 cursor-pointer hover:shadow-lg">
				<img className="w-32" src={image} alt={title} />
				<div className="mt-4 md:mt-2">
					<span className="bg-red-100 text-red-500 rounded p-1 text-sm font-semibold">
						{category}
					</span>
					<h4 className="mt-2">{title}</h4>
					<span className="text-gray-500">- {author}</span>
					<p className="my-3">{`${content.substring(0, 130)}...`}</p>
				</div>
			</div>
		</>
	);
};

export default Blog;
