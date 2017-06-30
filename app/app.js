import React from 'react'
import ReactDOM from 'react-dom'
import ListLine from './component/ListLine'
import Homepage from './component/homepage'
const { Provider } = require('react-redux')
import store from './store'
import Login from './component/login'
import DetailStory from './component/detailstory'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import Layout from './component/layout'
import Home from './component/home'

import '../public/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/font-awesome.css'
import '../public/css/app.css'

<<<<<<< HEAD
=======
class App extends React.Component {

  render(){
    return(
      <div className="container darktheme">
        <Homepage />
      </div>
    )
  }
}


>>>>>>> 4a2cf8242307e3701f1a0ddbfc84c6fde259e6b1
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/listline" component={ListLine} />
          <Route path="/detailstory" component={DetailStory} />
        </div>
      </Layout>
     </Router>
  </Provider>,
  document.getElementById('root')
)
