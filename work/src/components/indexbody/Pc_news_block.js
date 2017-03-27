import React from 'react';
import {Card} from 'antd';
// eslint-disable-next-line
import {Link} from 'react-router';

class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news:''
        };
    }
    componentWillMount() {
        var myFetchOp = {
           methods:'GET' 
        };
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`,myFetchOp)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                news:json
            })
        });
    }
    render() {
        let {news} = this.state;
        let newsList = "";
        if(news.length >0){
            newsList = news.map((newsItem,index) => (
            <li key={index} className="news-list-item">
                {newsItem.title}
                {/*<Link to={`details/${newsItem.uniquekey}`} target="_blank"></Link>*/}
            </li>));
        }else{
           newsList = '没有加载到新闻' ;
        }
        return(
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        );
    }
};
export default PCNewsBlock;