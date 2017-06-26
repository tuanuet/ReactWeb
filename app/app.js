import React from 'react'
import ReactDOM from 'react-dom'
import ListLine from './component/ListLine'
const { Provider } = require('react-redux')
import store from './store'

class App extends React.Component {
  render(){
    return(
      <div>
        <h3>ListLine</h3>
        <ListLine />
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
