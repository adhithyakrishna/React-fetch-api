import React, {Component} from 'react';
import NewSingle from './NewSingle';


class News extends Component {

    //creating a state
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    //runs after component has been rendered
    componentDidMount() {

        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=6b2dfd6f2f4e4dc090e6294a1b130e8f`;

        //fetch from javascript es6 we can use promises to fetch results
        fetch(url)
        .then((response) => { //fetch has to definitely return a response to do anything with it
            return response.json();

        }).then((data) => {
            this.setState({
                news: data.articles //returns an array
            })
        })
        .catch((error) => console.log(error));
    }

    //iterate through the data from the database

    //1) get the data
    //2) update the state
    //3) render information

    renderItem()
    {        
        return this.state.news.map((item)=> (
            <NewSingle key={item.url} item={item}/>
        ));
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


export default News;
