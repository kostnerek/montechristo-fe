import React, { useState, useEffect } from "react";
function App() {
	const [currentTime, setCurrentTime] = useState(0);

	useEffect(() => {
		fetch("/api/time")
			.then((res) => res.json())
			.then((data) => {
				setCurrentTime(data.time);
			});
	}, []);

	return (
		<>
			<div>Current time im [ms]: {currentTime}</div>
		</>
	);
}
export default App;
