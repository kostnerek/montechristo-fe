import React, { useState, useEffect } from "react";
import env from "react-dotenv";

function App() {
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		fetch("/api/time")
			.then((res) => res.json())
			.then((data) => {
				setCurrentTime(data.time);
			});
	}, []);
	console.log(process.env);
	const makeCall = () => {
		fetch("/api/user/user2")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	return (
		<>
			<div>Current time im [ms]: {currentTime}</div>
			<button onClick={makeCall}>Make call</button>
		</>
	);
}
export default App;
