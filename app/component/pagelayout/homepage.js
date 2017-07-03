/**
 * Created by ndthu on 6/30/2017.
 */
import React from 'react';

import '../../../public/css/homepage.css';
import StoryListWithTitle from '../base/storylist'

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
                    id : 1,
                    title: "Truyện mới nhất >",
                    stories: ["1", "2", "3", "4", "5", "6"],
                    slug: "truyen-moi-nhat"
                },
        {
            id : 2,
                title: "Truyện trinh thám >",
            stories: ["1", "2", "3", "4", "5", "6"],
            slug: "truyen-trinh-tham"
        },
        {
            id : 3,
                title: "Truyện lãng mạn >",
            stories: ["1", "2", "3", "4", "5", "6", "7"],
            slug: "truyen-lang-man"
        }
    ]
        }
    }

    render(){
        let array = this.state.categories.map((category, index)=>{
            return <div key = {index}><StoryListWithTitle title={category.title} stories={category.stories} name={category.slug}/> <hr/></div>
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
