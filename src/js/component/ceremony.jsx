import React from "react";
import PropTypes from "prop-types";

const Ceremony = props => {
	return (
		<section className={"ceremony ".concat(props.disposition)}>
			<article>
				<p>bla</p>
			</article>
			<img src={props.img} alt="foto del sitio" />
		</section>
	);
};

Ceremony.propTypes = {
	disposition: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string
};

export default Ceremony;
