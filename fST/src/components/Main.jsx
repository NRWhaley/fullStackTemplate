import React, { Component, useState } from 'react';


function MainComp() {

	const[count, setCount] = useState(0)
	
		return (
		<div>

		<h1>Hello {count}</h1>
		<button onClick={() => setCount(count + 1)}>Click here</button>
		</div>
		
		)
	}





export default MainComp;

