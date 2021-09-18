import React, { useState, useEffect } from 'react';


function App () {

const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = 'You clicked ${count} times'
	})


		return (
		<div>
		<h1>You've clicked {count} times</h1>
		<button onClick={()=> 
			setCount(count+1)}>Hi</button>
		</div>
		
		)

	}






export default App;

