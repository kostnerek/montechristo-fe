import React, { useState, useEffect } from "react";
import env from "react-dotenv";

function App() {
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		fetch(env.API_URL + "/api/time")
			.then((res) => res.json())
			.then((data) => {
				setCurrentTime(data.time);
			});
	}, []);
	console.log(process.env);
	return (
		<>
			<div>Current time im [ms]: {currentTime}</div>
		</>
	);
}
export default App;
