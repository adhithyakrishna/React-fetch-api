import React, {Component} from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class SideNews extends Component {

    //creating a state
    constructor(props) {
        super(props)
        this.state = {
            sidenews: [],
            error: false
        }
    }

    //runs after component has been rendered
    componentDidMount() {

        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=6b2dfd6f2f4e4dc090e6294a1b130e8f`;

        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews : response.data.articles
            })
        })
        .catch((error) => {
            this.setState({error:true})
        });
    }

    //iterate through the data from the database

    //1) get the data
    //2) update the state
    //3) render information

    renderItem()
    {        
        if(!this.state.error)
        {
            return this.state.sidenews.map((item)=> (
                <SingleSide key={item.url} item={item}/>
            ));
        }   
        else {
            return <Error />
        }
    }

    render()
    {
        return (
            <div className="row">
                {this.renderItem()}            
            </div>
        );
    }
}


export default SideNews;
