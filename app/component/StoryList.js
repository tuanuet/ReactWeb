/**
 * Created by thuannd on 02/07/2017.
 */
import React from 'react';

//1 truyen
function Story(props){
    return(

        <div className="card">
            <div className="card-thumb">
                <a href="book-info.html"><img className="thumb" src={props.logo} alt="Tot-to-chan"/></a>
            </div>

            <h1><a href="">Totto-chan</a></h1>
            <h2>15/12/2016 | 10/10</h2>

        </div>
    )
}

//nut xem them
function SeeMore(props){
    return(
        <div className="card">
            <div className="card-see-more"><button className="btn btn-success see-more" href="">SEE MORE >>></button></div>
        </div>
    )
}

//category
function Title(props){
    return (
        <h1>{props.title}</h1>
    )
}

//danh sach truyen
function StoryList(props){

    let arrObj = props.stories.map((story,i) => {
        return <Story key={i} storyName = {story} />
    });
    var seemore;
    if(!props.full) {
        if (arrObj.length > 5) {
            arrObj.length = 4;
            seemore=<SeeMore/>;
        }
    }
    return(
        <div className="result">
            {arrObj}
            {seemore}
        </div>
    )

}

//them title
function StoryListWithTitle(props){

    return(
        <div className="result">
            <Title title={props.title} />
            <StoryList stories = {props.stories} full={props.full} />
        </div>
    )
}

export default StoryListWithTitle;

