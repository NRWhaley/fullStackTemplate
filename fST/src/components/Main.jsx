import React, { Component, useState } from 'react';


class App extends Component {
	constructor(props){
	super(props)
		this.state = {
		count: 0
	}
	}


	handleClick(){
		this.setState({
			count: this.state.count + 1
		});
	}

		render(){

		return (
		<div>
		<h1>You've clicked the button {this.state.count} times</h1>
		<button onClick={()=> 
			this.handleClick()}>Click here</button>
		</div>
		
		)

		}
	}





export default App;

