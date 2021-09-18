import { response } from 'express';
import React, { useState, useEffect } from 'react';


function App () {

const [count, setCount] = useState(0)

const [info, setInfo] = useState('')
	useEffect(() => {
	//	document.title = 'You clicked ${count} times?'

	fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(json => 
		setInfo(json.title))
	})


		return (
		<div>
		<h1>You have clicked {count} times</h1>
		<button onClick={()=> 
			setCount(count+1)}>Hi</button>
		<h2>This is a response {info}</h2>
		</div>
		
		)

	}






export default App;

