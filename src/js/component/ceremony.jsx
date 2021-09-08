import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Ceremony = props => {
	const [text, setText] = useState("");

	useEffect(() => {
		if (props.disposition == "right") {
			setText(
				<article className="ceremony_text">
					<p>
						La ceremonia será a las
						<span className="bold"> 11:45 </span>
						en la capilla del colegio en dónde se conocieron.
					</p>
					<p>
						El colegio H.H. Maristas de Alicante se encuentra en la
						<span className="bold"> C/ Isla de Corfú, 5</span>.
					</p>
					<p>
						Es fácil aparcar en la zona en caso de asistir en
						vehículo propio.
					</p>
					<a href={props.text}>
						<button className="ceremony_button">
							Ver en el mapa
						</button>
					</a>
					<p>
						Se ruega puntualidad ya que
						<span className="bold"> la novia </span>llegará a las
						12:00 y{" "}
						<span className="bold">
							{" "}
							debe ser la última en llegar
						</span>
						.
					</p>
				</article>
			);
		} else {
			setText(
				<article className="ceremony_text">
					<p>
						El banquete y fiesta serán en la
						<span className="bold"> Finca Torre Bosch </span>
					</p>
					<p>
						La finca se encuentra en la
						<span className="bold">
							{" "}
							Avenida Conrado Albadalejo, 3
						</span>
						.
					</p>
					<a href={props.text}>
						<button className="ceremony_button">
							Ver en el mapa
						</button>
					</a>
					<p>
						El cocktail comenzará a las
						<span className="bold"> 14:00 </span>y la comida a las
						<span className="bold"> 15:00</span>.
					</p>
					<p>
						Para vuestra tranquilidad dispondremos de autobúses
						tanto de ida cómo de vuelta al centro de Alicante.
					</p>
				</article>
			);
		}
	}, []);

	return (
		<section className={"ceremony ".concat(props.disposition)}>
			{text}
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
