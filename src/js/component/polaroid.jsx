import React from "react";
import PropTypes from "prop-types";

const Polaroid = props => {
	return (
		<figure clallName="polaroid">
			<img src={props.img[0]} alt="" />
		</figure>
	);
};

Polaroid.propTypes = {
	img: PropTypes.array.isRequired
};

export default Polaroid;
