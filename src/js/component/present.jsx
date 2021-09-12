import React from "react";
import PropTypes from "prop-types";

const Present = props => {
	return (
		<section className="present">
			<figure className="polaroid">
				<img src={props.img} alt="Daniel y María de viaje" />
				<figcaption>Just Married</figcaption>
			</figure>
			<article>
				<p>
					Nos hace mucha ilusión compartir con vosotros nuestra boda
					el próximo 30 de octubre, ése es el mejor regalo que podéis
					hacernos. Pero si además queréis ayudarnos con nuestro viaje
					de <span className="strong">Luna de Miel</span>, os pasamos
					un número de cuenta para que podáis hacerlo. ¡Muchas gracias
					de antemano y esperamos veros a todos muy pronto!
				</p>
				<p>
					ES24 0182 1294 1502 0690 6805
				</p>
			</article>
		</section>
	);
};

export default Present;

Present.propTypes = {
	img: PropTypes.string
};
