const FilterBtn = ({ handleFilter, text }) => {
	return (
		<>
			<button
				onClick={() => handleFilter(text)}
				className="bg-red-100 text-red-500 border border-red-500 text-sm md:text-lg rounded px-2 md:px-6 py-1 md:py-2 mb-2 md:mb-0 hover:bg-red-500 hover:text-white transition duration-300 ease-in"
			>
				{text}
			</button>
		</>
	);
};

export default FilterBtn;
