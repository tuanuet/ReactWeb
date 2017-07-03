import { connect } from 'react-redux'
import React from 'react'

function DetailChapterItem(props) {
  return(
    <div className="detail-chaper-content-item"><a>{props.title}</a></div>
  )
}
function DetailChapterList(props) {
  let list = props.arr.map((item,i)=>{return (<DetailChapterItem key={item.id} title={item.title}/>)});
  return(
    <div>{list}</div>
  )
}


@connect(state => {return {listChap : state.listChap}})
class DetailChapter extends React.Component{
  render(){
    return(
      <div className="detail-chaper col-md-offset-1">
        <div className="detail-chaper-header "><h3>Danh sách các chương</h3></div>
        <div className="detail-chaper-content">
          <DetailChapterList arr={this.props.listChap}/>
        </div>
      </div>
    )
  }
}

export default DetailChapter
