import React from "react";
import PropTypes from "prop-types";

const HeaderImg = props => {
	return (
		<figure>
			<img className="header_img" src={props.img} alt={props.alt} />
		</figure>
	);
};

HeaderImg.propTypes = {
	img: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};

export default HeaderImg;
