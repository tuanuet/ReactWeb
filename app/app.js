import React from 'react'
import ReactDOM from 'react-dom'
import ListLine from './component/ListLine'
const { Provider } = require('react-redux')
import store from './store'
import Login from './component/registration/login'
import DetailStory from './component/pagelayout/detailstory'
import { HashRouter as Router, Route, Link }  from 'react-router-dom'
import Layout from './component/layout/layout'
import Home from './component/pagelayout/homepage'
import CategoryPage from './component/pagelayout/categorypage'

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
          <Route path="/detailstory/:id" component={DetailStory} />
            <Route path="/truyen/:id" component={CategoryPage} />

        </div>
      </Layout>
     </Router>
  </Provider>,
  document.getElementById('root')
)
