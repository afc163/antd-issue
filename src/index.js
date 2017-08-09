import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'antd/dist/antd.css';

ReactDOM.render(<App />, document.getElementById('root'))

// function init() {
//   const App = require('./components/App').default
//   ReactDOM.render(<App />, document.getElementById('root'))
// }
//
// if (module.hot) {
//   module.hot.accept('./components/App', init)
// }
//
// init()
