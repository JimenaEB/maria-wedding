import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const getTimeRemaining = endDate => {
	const total = Date.parse(endDate) - Date.parse(new Date());
	let minutes, hours, days;

	if (total > 0) {
		minutes = Math.floor((total / 1000 / 60) % 60);
		hours = Math.floor((total / 1000 / 60 / 60) % 24);
		days = Math.floor(total / 1000 / 60 / 60 / 24);
	} else {
		minutes = 0;
		hours = 0;
		days = 0;
	}
	return {
		days,
		hours,
		minutes
	};
};

const zeroPad = (num, places) => String(num).padStart(places, "0");

const Countdown = props => {
	const [timeLeft, setTimeLeft] = useState(getTimeRemaining(props.endDate));

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(getTimeRemaining(props.endDate));
		}, 1000);
	});

	//let { days, hours, minutes } = getTimeRemaining(props.endDate);
	return (
		<p>
			{zeroPad(timeLeft.days, 2)}:{zeroPad(timeLeft.hours, 2)}:
			{zeroPad(timeLeft.minutes, 2)}
		</p>
	);
};

Countdown.propTypes = {
	endDate: PropTypes.instanceOf(Date)
};

export default Countdown;
