import React from 'react'
import NavBar from './header'
import Footer from './footer'
class Layout extends React.Component {
  render(){
    return(
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
