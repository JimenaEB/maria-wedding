import React from "react";
import PropTypes from "prop-types";

import Polaroid from "./polaroid.jsx";

const History = props => {
	return (
		<section className="history">
			<article className="history_text">
				<p>{props.text[0]}</p>
				<p>{props.text[1]}</p>
			</article>
			<Polaroid img={props.img} />
		</section>
	);
};

History.propTypes = {
	text: PropTypes.array.isRequired,
	img: PropTypes.array.isRequired
};

export default History;
