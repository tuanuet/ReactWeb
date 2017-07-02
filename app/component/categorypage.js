/**
 * Created by thuannd on 02/07/2017.
 */
import React from 'react';
import StoryListWithTitle from './StoryList';
import '../../public/css/homepage.css';


class Category extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            title: "Truyen trinh tham"
        }
    }

    render(){
        return(
            <div className="container">
                <div className="container">
                    <div className="wrapper">
                        <SearchForm />
                        <StoryListWithTitle
                            title={this.state.title}
                            stories={this.state.stories}
                            full="1"/>
                    </div>
                </div>
            </div>
        )
    }
}

function SearchForm(props){
    return(
        <div className="search-form">
            <input type="text" placeholder="Tìm kiếm..."/>
            <a href="#!"><i className="material-icons">search</i></a>
        </div>
    )
}

export default Category;