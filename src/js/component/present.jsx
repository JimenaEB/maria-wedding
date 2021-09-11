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
					Lo más importante es poder contar con vuestra presencia y
					poder compartir con vosotros el próximo 30 de Octubre, pero,
					si estáis pensando en hacernos un regalo, lo que más ilusión
					nos haría es que colaboráseis con nuestra{" "}
					<span className="strong">Luna de Miel</span>.
				</p>
				<p>
					Nuestro número de cuenta es: ES24 0182 1294 1502 0690 6805
				</p>
			</article>
		</section>
	);
};

export default Present;

Present.propTypes = {
	img: PropTypes.string
};
