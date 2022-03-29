import React from "react";
import lodingImg from "../assets/images/loading.svg";

const Loading = () => {
	return (
		<div className="flex justify-center">
			<img className="w-24 h-24" src={lodingImg} alt="Loading..." />
		</div>
	);
};

export default Loading;
