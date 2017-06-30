import React from 'react'
import NavBar from './navbar'
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
