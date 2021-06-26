import React from 'react';
import ReactDOM from 'react-dom';
import MainComp from './components/Main.jsx';
// Main Entry point function
function App() {
	return < MainComp/>;
}

/**
 * TODO:
 * add routing configuration
 * add redux or any other state manager
 * check out any best practises
 */

// Rendering the entire react application
ReactDOM.render(<App/>, document.getElementById('root'));