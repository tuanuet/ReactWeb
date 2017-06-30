import React from 'react'
import ReactDOM from 'react-dom'
import ListLine from './component/ListLine'
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

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </div>
      </Layout>
     </Router>
  </Provider>,
  document.getElementById('root')
)
