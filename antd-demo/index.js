import React from 'react';
import ReactDOM from 'react-dom';
import { Icon} from 'antd';

class App extends React.Component {
	render () {
		return (
			<div>
			   <Icon type="smile"/>
		    </div>
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
