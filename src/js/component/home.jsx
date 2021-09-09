import React, { Fragment } from "react";

import Title from "./title.jsx";
import HeaderImg from "./headerImg.jsx";
import ProgressBar from "./progressBar.jsx";
import Countdown from "./countdown.jsx";
import History from "./history.jsx";
import GForm from "./gform.jsx";
import Ceremony from "./ceremony.jsx";
import Present from "./present.jsx";

import md1 from "../../img/C32B0FBE-213B-4460-94DC-2ABC984B365A_1_105_c.jpeg";
import md2 from "../../img/D405D16C-6E3A-423A-8D57-6A1F27E2F9FE_1_105_c.jpeg";
import md3 from "../../img/EAFB1781-2511-4AB1-8A02-39E920D338EE_1_105_c.jpeg";
import chapel from "../../img/image.png";
import hotel from "../../img/where.png";
import travel from "../../img/myd.jpg";

const Home = () => {
	const weddingDate = new Date(2021, 9, 30, 12);
	const dates = [
		{
			text: "Todo empezó",
			when: "21/05/2010"
		},
		{
			text: "Sí quiero",
			when: "30/10/2021"
		},
		{
			text: "Para",
			when: "siempre"
		}
	];
	const images = [md1, md2, md3];
	const textHistory = [
		"Dani y María se conocieron en el colegio Sagrado Corazón HH. Maristas, dónde estudiaron juntos muchos años.",
		"No fue hasta que coincidieron en Bachiller, en el aula C, que empezó su historia y, aún así, se hicieron de rogar hasta el último día de curso..."
	];
	const place = "https://goo.gl/maps/BWmdWBiPvL34BPxL6";
	const lunch = "https://goo.gl/maps/mKJ7LeQ5ZcemNkXj9";

	return (
		<Fragment>
			<header>
				<Title title="María & Daniel" />
				<Countdown endDate={weddingDate}></Countdown>
				<ProgressBar progress={dates} />
				<HeaderImg />
			</header>
			<History img={images} text={textHistory} />
			<h2>La ceremonia</h2>
			<Ceremony disposition="right" text={place} img={chapel} />
			<Ceremony disposition="left" text={lunch} img={hotel} />
			<GForm />
			<Present img={travel} />
		</Fragment>
	);
};

export default Home;
