import React from "react";

const Message = ({ color, text }) => {
	return (
		<div
			className={`bg-${color}-100 text-${color}-500 px-4 py-3 rounded font-semibold`}
		>
			{text}
		</div>
	);
};

export default Message;
