/**
 * Created by ndthu on 6/30/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/css/homepage.css';

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

function SearchForm(props){
    return(
        <div className="search-form">
            <input type="text" placeholder="Tìm kiếm..."/>
            <a href="#!"><i className="material-icons">search</i></a>
        </div>
    )
}

function SeeMore(props){
    return(
        <div className="card">
            <div className="card-see-more"><button className="btn btn-success see-more" href="">SEE MORE >>></button></div>
        </div>
    )
}

function Title(props){
    return (
        <h1>{props.title}</h1>
    )
}

function StoryList(props){

    let arrObj = props.stories.map((story,i) => {
        return <Story key={i} storyName = {story} />
    });
    if(arrObj.length > 5){
        arrObj.length = 4;
    }
    return(
        <div className="result">
            {arrObj}
            <SeeMore/>
        </div>
    )

}

//them title
function StoryListWithTitle(props){

    return(
        <div className="result">
            <Title title={props.title} />
            <StoryList stories = {props.stories} />
        </div>
    )
}

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories: [
                {
                    title: "Truyện mới nhất >",
                    stories: ["1", "2", "3", "4", "5", "6"]
                },
                {
                    title: "Truyện trinh thám >",
                    stories: ["1", "2", "3", "4", "5", "6"]
                },
                {
                    title: "Truyện lãng mạn >",
                    stories: ["1", "2", "3", "4", "5", "6", "7"]
                }
            ]
        }
    }

    render(){
        let array = this.state.categories.map((category, index)=>{
            return <div key = {index}><StoryListWithTitle title={category.title} stories={category.stories}/> <hr/></div>
        });
        return(
            <div className="container">
                <div className="container">
                    <div className="wrapper">
                        <SearchForm/>
                        {array}
                    </div>
                </div>
            </div>

        )
    }
}

export default Homepage;
