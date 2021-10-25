import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Hotel = props => {
	const [text, setText] = useState("");

	useEffect(() => {
		setText(
			<article className="ceremony_text">
				<p>
					Sabemos que algunos de vosotros venís desde fuera y os
					queremos recomendar este hotel que esta en San Juan. Decid
					que vais de parte de la boda de Daniel y María.
				</p>
				<a
					href="https://www.hotelvillasanjuan.com/"
					target="_blank"
					rel="noreferrer">
					<button className="ceremony_button">Ver hotel</button>
				</a>
				<a
					href="https://goo.gl/maps/ALJamKEcyEG533YbA"
					target="_blank"
					rel="noreferrer">
					<button className="ceremony_button">Ver en el mapa</button>
				</a>
			</article>
		);
	}, []);

	return (
		<section className={"ceremony ".concat(props.disposition)}>
			{text}
			<img src={props.img} alt="foto del hotel" />
		</section>
	);
};

Hotel.propTypes = {
	disposition: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string
};

export default Hotel;
