const FilterBtn = ({ handleFilter, text }) => {
	return (
		<>
			<button
				onClick={() => handleFilter(text)}
				className="bg-red-100 text-red-500 border border-red-500 text-lg rounded px-6 py-2 hover:bg-red-500 hover:text-white transition duration-300 ease-in"
			>
				{text}
			</button>
		</>
	);
};

export default FilterBtn;
