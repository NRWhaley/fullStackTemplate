import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main.jsx';
// Main Entry point function
function Main() {
	return <App />;
}

/**
 * TODO:
 * add routing configuration
 * add redux or any other state manager
 * check out any best practises
 */

// Rendering the entire react application
ReactDOM.render(<Main />, document.getElementById('root'));