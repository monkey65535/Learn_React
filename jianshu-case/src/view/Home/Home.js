import React, {Component} from 'react';
import AuthorList from '../../components/Author/AuthorList';
import PreviewList from '../../layout/Preview/PreviewList';
import config from '../../common/config/config.json';
/*
 * components:
 * AuthorList 作者列表
 * PreviewList 文章列表
 */
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previews: [],
            authors: []
        }
    }
    componentDidMount(){
        //获取数据
        $.post(`${config.url}/getPreview`,(re)=>{
            console.log(re);
            if(re.code === 0){
                const {data} = re;
                this.setState({previews:data});
            }
        });
        $.post(`${config.url}/getAuthor`,(re)=>{
            console.log(re);
            if(re.code === 0){
                const {data} = re;
                this.setState({authors:data});
            }
        })
    }
    render() {
        return (
            <div className="ui container grid">
                <div className="column twelve wide">
                    <PreviewList previews={this.state.previews}/>
                </div>
                <div className="column four wide">
                    <AuthorList authors={this.state.authors}/>
                </div>
            </div>
        );
    }
}

export default Home;