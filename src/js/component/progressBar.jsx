import React from "react";

const ProgressBar = props => {
	return (
		<section className="progress-bar">
			<hr className="progress-bar_line" />
			<div className="progress-bar_point"></div>
			<div className="progress-bar_point"></div>
			<div className="progress-bar_point"></div>
		</section>
	);
};

export default ProgressBar;
