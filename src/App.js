import React, { useState, useEffect } from "react";

function App() {
	const makeCall = () => {
		fetch("/api/user/user2")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};
	return (
		<>
			<button onClick={makeCall}>Make call</button>
		</>
	);
}
export default App;
