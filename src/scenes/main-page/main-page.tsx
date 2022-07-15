import React, { useState } from 'react';

const MainPage: React.FC = ()=>{
	const [counter, setCounter] = useState(0);
	const increment = ()=>{
		setCounter(c=>c+1)
	}
	return <>
		<h1>Main page</h1>
		<h2>Counter:</h2>
		<h3>{counter}</h3>
		<button onClick={increment}>Increment</button>
	</>
}

export default MainPage;