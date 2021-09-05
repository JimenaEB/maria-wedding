import React, { Fragment } from "react";

import Title from "./title.jsx";
import HeaderImg from "./headerImg.jsx";
import ProgressBar from "./progressBar.jsx";

import mariaDaniPiscina from "../../img/7E2987B6-A8C7-4977-9EB2-07366C463764_1_105_c.jpeg";

//create your first component
const Home = () => {
	const date = [
		{
			text: "Todo empezó un",
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

	return (
		<Fragment>
			<header>
				<Title title="María & Daniel" />
				<ProgressBar progress={date} />
				<HeaderImg
					img={mariaDaniPiscina}
					alt="Foto de portada, María y Dani en la piscina"
				/>
			</header>
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
