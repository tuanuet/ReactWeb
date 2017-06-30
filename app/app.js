import React from 'react'
import ReactDOM from 'react-dom'
import ListLine from './component/ListLine'
import Homepage from './component/homepage'
const { Provider } = require('react-redux')
import store from './store'
import Login from './component/login'
import DetailStory from './component/detailstory'

import '../public/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/font-awesome.css'
import '../public/css/app.css'

class App extends React.Component {

  render(){
    return(
      <div className="container darktheme">
        <Homepage />
      </div>
    )
  }
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
