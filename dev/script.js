import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import Form from './components/Form';
import Comments from './components/Comments';

class App extends Component {
	render() {
		return (
			<div class="box">
				<Title />
                <Form />
				<Comments />
			</div>
		);
	}
}


ReactDOM.render(
    <App />,

    document.getElementById('app')
)