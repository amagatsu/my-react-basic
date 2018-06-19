import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TopMenu from './TopMenu';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TopMenu />, document.getElementById('TopMenu'));
ReactDOM.render(<Home />, document.getElementById('Home'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
