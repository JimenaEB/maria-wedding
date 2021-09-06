import React from "react";
import PropTypes from "prop-types";

import Polaroid from "./polaroid.jsx";

const History = props => {
	return (
		<section>
			<p>{props.text[0]}</p>
			<p>{props.text[1]}</p>
			<Polaroid img={props.img} />
		</section>
	);
};

History.propTypes = {
	text: PropTypes.array.isRequired,
	img: PropTypes.array.isRequired
};

export default History;
