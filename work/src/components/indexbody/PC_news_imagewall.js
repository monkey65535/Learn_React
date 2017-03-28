import React from 'react';
import {Card} from 'antd';
// eslint-disable-next-line
import {Link} from 'react-router';

class PCNewsImgBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            imgList:""
        }
    }
    componentWillMount() {
        var myFetchOp = {
           methods:'GET' 
        };
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`,myFetchOp)
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                imgList:json
            })
        });
    }
    render() {
        let {imgList} = this.state;
        let imagesList = "";
        let styleImg = {
            display:'block',
            width:this.props.imageWidth,
            height:'90px'
        };
        let styleH3 = {
            width:this.props.imageWidth,
            widthSpace:'noWarp',
            overflow:'hidded',
            textOverfliow:'ellipsis'
        };
        if(imgList.length >0){
            imagesList = imgList.map((newsItem,index) => (
            <div key={index} className="image_block">
                <div className="img-con">
                    <img style={styleImg} src={newsItem.thumbnail_pic_s} alt=""/>
                </div>
                <div className="custom-card">
                    <h3 style={styleH3}>{newsItem.title}</h3>
                    <p >{newsItem.author_name}</p>
                </div>
                {/*<Link to={`details/${newsItem.uniquekey}`} target="_blank"></Link>*/}
            </div>));
        }else{
           imagesList = '没有加载到图片' ;
        }
        return(
            <div className="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width:this.props.width}}>
                    <ul>
                        {imagesList}
                    </ul>
                </Card>
            </div>
        );
    }
};
export default PCNewsImgBlock;