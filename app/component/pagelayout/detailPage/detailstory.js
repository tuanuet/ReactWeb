import React from 'react'
import '../../../../public/css/detailstory.css'
import { connect } from 'react-redux'
import DetailChapter from './detailchap'
import DetailBody from './detailbody'


@connect(state => {return {}})
class DetailStory extends React.Component {
  render(){
    return(
      <div>
        <DetailBody />
        <DetailChapter idstory={this.props.match.params.id}/>
      </div>
    )
  }
}

export default DetailStory
