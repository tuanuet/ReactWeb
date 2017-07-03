import { connect } from 'react-redux'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import constance from '../../../constance.json'
import request from 'superagent'
import {addItem , delItem ,addAllChap , delAndAddAll ,delAllChap} from '../../../action/list-chap'

function DetailChapterItem(props) {
  return(
    <div className="detail-chaper-content-item"><a>{props.title}</a></div>
  )
}
function DetailChapterList(props) {
  let list = props.arr.map((item,i)=>{return (<DetailChapterItem key={i} title={item.title}/>)});
  return(
    <div>{list}</div>
  )
}

/**
  * get array chapter after call api
  *  {
        "id": 17,
        "date": "2017-07-03T06:21:12",
        "date_gmt": "2017-07-03T06:21:12",
        "guid": {
            "rendered": "http://kiemhiep.9xkun.com/?post_type=session&#038;p=17"
        },
        "modified": "2017-07-03T06:35:26",
        "modified_gmt": "2017-07-03T06:35:26",
        "slug": "quyen-1-khoi-lua-suot-ba-thang-chuong-1-thien-nhan-chin-kiep",
        "type": "session",
        "link": "http://kiemhiep.9xkun.com/session/quyen-1-khoi-lua-suot-ba-thang-chuong-1-thien-nhan-chin-kiep/",
        "title": {
            "rendered": "Quyển 1 – Khói lửa suốt ba tháng &#8212; Chương 1 &#8211; Thiện nhân chín kiếp"
        },
        "content": {
            "rendered": "<h3>Quyển 1 – Khói lửa suốt ba tháng &#8212; Chương 1 &#8211; Thiện nhân chín kiếp</h3>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Quyển 1 – Khói lửa suốt ba tháng &#8212; Chương 1 &#8211; Thiện nhân chín kiếp</p>\n",
            "protected": false
        },
        "author": 2,
        "featured_media": 0,
        "stories": [
            8
        ],
        "acf": false,
        "_links": {
            "self": [
                {
                    "href": "http://kiemhiep.9xkun.com/wp-json/wp/v2/sessions/17"
                }
            ],
            "collection": [
                {
                    "href": "http://kiemhiep.9xkun.com/wp-json/wp/v2/sessions"
                }
            ],
            "about": [
                {
                    "href": "http://kiemhiep.9xkun.com/wp-json/wp/v2/types/session"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "http://kiemhiep.9xkun.com/wp-json/wp/v2/users/2"
                }
            ],
            "wp:attachment": [
                {
                    "href": "http://kiemhiep.9xkun.com/wp-json/wp/v2/media?parent=17"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "story",
                    "embeddable": true,
                    "href": "http://kiemhiep.9xkun.com/wp-json/wp/v2/stories?post=17"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    }
  */
let getListChapter = (list) => {
  return list.reduce((prev,i)=>{
    let item = {
      id : i.id,
      title : i.title.rendered
    }
    prev.push(item)
    return prev
  },[])
}

@connect(state => {return {listChap : state.listChap}})
class DetailChapter extends React.Component{
  constructor(props){
    super(props)
    this.index = 0
    this.generateChaperItem=this.generateChaperItem.bind(this)
  }
  //gửi request lần đâu vs offset = 0
  componentDidMount(){
    this.generateChaperItem(this.index)
  }
  //setState update lại chapter
  generateChaperItem(offset){
    console.log(offset);
    //xu ly pagination offset *10

    let { match } =this.props
    const url = `${constance.baseURL}/sessions?story=${this.props.idstory}`
    request
      .get(url)
      .end((err, res) =>{
        if(err) return console.log(err);
        let { dispatch } = this.props;
        const chapterItem = getListChapter(res.body)
        dispatch(addAllChap(chapterItem))
      });
  }


  render(){
    return(
      <div className="detail-chaper col-md-offset-1">
        <div className="detail-chaper-header "><h3>Danh sách các chương</h3></div>
        <div className="detail-chaper-content">
          <InfiniteScroll
            next={()=> {this.generateChaperItem(++this.index)}}
            hasMore={true}
            height={350}
            loader={<h4>Loading...</h4>}>
            <DetailChapterList arr={this.props.listChap}/>
          </InfiniteScroll>
        </div>
      </div>
    )
  }
}

export default DetailChapter
