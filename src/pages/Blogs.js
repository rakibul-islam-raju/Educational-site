import { useState, useEffect } from "react";
import Blog from "../components/Blog";

const Blogs = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("./fakedb/blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	console.log("blog");

	return (
		<div className="mt-24 py-16">
			<section className="wrapper">
				<h2 className="text-center text-gray-600 font-semibold">
					Recent Blogs
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
					{blogs.map((blog) => (
						<Blog blog={blog} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Blogs;
