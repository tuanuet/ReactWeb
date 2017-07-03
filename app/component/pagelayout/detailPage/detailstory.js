import React from 'react'
import '../../../../public/css/detailstory.css'
import request from 'superagent'
import {addItem , delItem ,addAllChap , delAndAddAll ,delAllChap} from '../../../action/list-chap'
import { connect } from 'react-redux'
import constance from '../../../constance.json'
import DetailChapter from './detailchap'
import DetailBody from './detailbody'
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

@connect(state => {return {}})
class DetailStory extends React.Component {
  componentDidMount(){
    let { match } =this.props
    const url = `${constance.baseURL}/sessions?story=${match.params.id}`
    request
      .get(url)
      .end((err, res) =>{
        if(err) return console.log(err);

        let { dispatch } = this.props;
        const chapterItem = getListChapter(res.body)

        dispatch(delAndAddAll(chapterItem))

      });
  }
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
