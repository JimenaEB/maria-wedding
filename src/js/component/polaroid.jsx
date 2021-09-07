import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const captions = ["😍", "😘", "🥰", "🤪", "🤩", "❤️"];

const Polaroid = props => {
	const [imageIndex, setImageIndex] = useState(0);
	const [currentImg, setCurrentImg] = useState(props.img[imageIndex]);
	const [imgCaption, setImgCaption] = useState(captions[0]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setImageIndex(imageIndex + 1);
			setCurrentImg(props.img[imageIndex % props.img.length]);
			setImgCaption(
				captions[Math.floor(Math.random() * captions.length)]
			);
		}, 4500);
	});

	return (
		<figure className="polaroid">
			<img src={currentImg} alt="" />
			<figcaption>{imgCaption}</figcaption>
		</figure>
	);
};

Polaroid.propTypes = {
	img: PropTypes.array.isRequired
};

export default Polaroid;
