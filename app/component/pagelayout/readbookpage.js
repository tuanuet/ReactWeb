/**
 * Created by thuannd on 02/07/2017.
 */
import React from 'react';
var axios = require('axios');

class ReadBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
    var _this = this;
    this.serverRequest =
        axios
            .get("http://kiemhiep.9xkun.com/wp-json/wp/v2/sessions?story=5")
            .then(function(result) {
                _this.setState({
                    data: result.data
                });
            })
    }

    componentWillUnmount(){
        this.serverRequest.abort();
    }

    render(){
        return(
            <div className="container">
                <div className="container">
                    <div className="wrapper">
                        {this.state.data.map(function(job) {
                            return (
                                <div className="job">
                                    <a href="#">
                                        {job.id}

                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
export default ReadBook;