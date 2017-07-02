/**
 * Created by ndthu on 6/30/2017.
 */
import React from 'react';

import '../../public/css/homepage.css';
import StoryListWithTitle from './StoryList'

function SearchForm(props){
    return(
        <div className="search-form">
            <input type="text" placeholder="Tìm kiếm..."/>
            <a href="#!"><i className="material-icons">search</i></a>
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
