import React, { Fragment } from "react";

import Title from "./title.jsx";
import HeaderImg from "./headerImg.jsx";
import ProgressBar from "./progressBar.jsx";
import Countdown from "./countdown.jsx";

import mariaDaniPiscina from "../../img/7E2987B6-A8C7-4977-9EB2-07366C463764_1_105_c.jpeg";

//create your first component
const Home = () => {
	return (
		<Fragment>
			<header>
				<Title title="María & Daniel" />
				<ProgressBar />
				<HeaderImg
					img={mariaDaniPiscina}
					alt="Foto de portada, María y Dani en la piscina"
				/>
			</header>
			<Countdown endDate={new Date(2021, 9, 30, 12)}></Countdown>
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
