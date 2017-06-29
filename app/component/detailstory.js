import React from 'react'
import '../../public/css/detailstory.css'


function DetailBodyImageName() {
  return(
    <div className="row">
      <h3 className="center-block col-md-4 detail-body-img-name text-center">Romeo and Julie</h3>
    </div>
  )
}
class DetailBodyImage extends React.Component{
  render(){
    return(
      <div className="detail-body-img">
        <div className="col-sx-4 col-md-4 col-md-offset-1">
          <div className="thumbnail">
            <a href="/w3images/lights.jpg">
              <img src="http://clipartix.com/wp-content/uploads/2017/01/Free-film-strip-clipart-image.jpg" alt="Lights"/>
              <DetailBodyImageName />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

class DetailBodyDescription extends React.Component{
  render(){
    return(
      <div>
        <div className="col-md-4">
          <div className="detail-body-des">
            <p><strong>Tác giả: </strong><a>Vũ Minh Tuấn</a></p>
            <p><strong>Thể loại: </strong><a>Tình cảm</a></p>
            <p><strong>Số chương: </strong><a>419</a></p>
            <p><strong>Trạng thái: </strong><a>còn tiếp</a></p>
            <p><strong>Ngày xuất hành: </strong>tháng 12 năm 2016</p>
          </div>
        </div>
        <div className="col-md-4 btn-group-lg inline">
          <button className="btn btn-primary">Giới thiệu</button>
          <button className="btn btn-danger">Đọc ngay</button>
        </div>
      </div>

    )
  }
}
function Clearfix() {
  return (
    <div className="clearfix"></div>
  )
}
class DetailBody extends React.Component{
  render(){
    return(
      <div className="detail-body">
        <DetailBodyImage />
        <DetailBodyDescription />
        <Clearfix />
      </div>
    )
  }
}
let a = [
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing',
  'Lorem Ipsum is simply dummy text of the printing'
]
function DetailChapterItem(props) {
  return(
    <div className="detail-chaper-content-item"><a>{props.name}</a></div>
  )
}
function DetailChapterList(props) {
  let list = props.arr.map((item,i)=>{return (<DetailChapterItem key={i} name={item}/>)});
  return(
    <div>{list}</div>
  )
}

class DetailChapter extends React.Component{
  render(){
    return(
      <div className="detail-chaper col-md-offset-1">
        <div className="detail-chaper-header "><h3>Danh sách các chương</h3></div>
        <div className="detail-chaper-content">
          <DetailChapterList arr={a}/>
        </div>
      </div>
    )
  }
}

class DetailStory extends React.Component {
  render(){
    return(
      <div>
        <DetailBody />
        <DetailChapter />
      </div>
    )
  }
}

export default DetailStory
