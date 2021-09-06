import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProgressBar = props => {
	let progressInitial = new Array(props.progress.length);
	const [points, setPoints] = useState(progressInitial);

	useEffect(() => {
		setPoints(
			props.progress.map(element => {
				return (
					<div
						key={element.text}
						className="progress-bar_point-group">
						<div className="progress-bar_point"></div>
						<p>{element.text}</p>
						<span className="bold">{element.when}</span>
					</div>
				);
			})
		);
	}, []);

	return (
		<section className="progress-bar">
			<hr className="progress-bar_line" />
			{points[0]}
			{points[1]}
			{points[2]}
		</section>
	);
};

ProgressBar.propTypes = {
	progress: PropTypes.array.isRequired
};

export default ProgressBar;
