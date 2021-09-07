import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Polaroid = props => {
	const [imageIndex, setImageIndex] = useState(0);
	const [currentImg, setCurrentImg] = useState(props.img[imageIndex]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setImageIndex(imageIndex + 1);
			setCurrentImg(props.img[imageIndex % props.img.length]);
		}, 4500);
	});

	return (
		<figure className="polaroid">
			<img
				src={currentImg}
				alt="Daniel y María en frente de una cascada"
			/>
			<figcaption>😍 🥰 🤪</figcaption>
		</figure>
	);
};

Polaroid.propTypes = {
	img: PropTypes.array.isRequired
};

export default Polaroid;
