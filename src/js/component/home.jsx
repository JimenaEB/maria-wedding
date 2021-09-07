import React, { Fragment } from "react";

import Title from "./title.jsx";
import HeaderImg from "./headerImg.jsx";
import ProgressBar from "./progressBar.jsx";
import Countdown from "./countdown.jsx";
import History from "./history.jsx";
import GForm from "./gform.jsx";

import mariaDaniPiscina from "../../img/7E2987B6-A8C7-4977-9EB2-07366C463764_1_105_c.jpeg";
import md1 from "../../img/C32B0FBE-213B-4460-94DC-2ABC984B365A_1_105_c.jpeg";
import md2 from "../../img/D405D16C-6E3A-423A-8D57-6A1F27E2F9FE_1_105_c.jpeg";
import md3 from "../../img/EAFB1781-2511-4AB1-8A02-39E920D338EE_1_105_c.jpeg";

const Home = () => {
	const date = [
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
	const text = [
		"Dani y María se conocieron en el colegio Sagrado Corazón HH. Maristas dónde estudiaron juntos muchos años.",
		"No fue hasta que coincidieron en Bachiller, en el aula C, que empezó su historia y, aún así, se hicieron de rogar hasta el último día de curso..."
	];

	return (
		<Fragment>
			<header>
				<Title title="María & Daniel" />
				<Countdown endDate={new Date(2021, 9, 30, 12)}></Countdown>
				<ProgressBar progress={date} />
				<HeaderImg />
			</header>

			<History img={images} text={text} />
			<GForm></GForm>
		</Fragment>
		// <div className="text-center mt-5">
		// 	<h1>Hello Rigo!</h1>
		// 	<p>
		// 		<img src={mariaDaniPiscina} />
		// 	</p>
		// 	<a href="#" className="btn btn-success">
		// 		If you see this green button... bootstrap is working
		// 	</a>
		// 	<p>
		// 		Made by{" "}
		// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 		love!
		// 	</p>
		// </div>
	);
};

export default Home;
