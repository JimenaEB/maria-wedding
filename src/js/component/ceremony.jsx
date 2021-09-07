import React from "react";
import PropTypes from "prop-types";

const Ceremony = props => {
	return (
		<section className={"ceremony ".concat(props.disposition)}>
			<article>
				<p>
					La ceremonia será a las
					<span className="bold">11:45</span>
					en la capilla del colegio en dónde se conocieron.
				</p>
				<p>
					El colegio H.H. Maristas de Alicante se encuentra en la
					<span className="bold"> C/ Isla de Corfú, 5</span>.
				</p>
				<p>
					Es fácil aparcar en la zona en caso de asistir en vehículo
					propio.
				</p>
				<button>
					<a href={props.text}>Ver en el mapa</a>
				</button>
				<p>
					Se ruega puntualidad ya que la novia llegará a las 12:00 y
					debe ser la última en llegar.
				</p>
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
