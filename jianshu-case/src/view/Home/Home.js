
import PreviewList from 'preview/PreviewList';
import Recommend from 'components/home/Recommend';
import config from '../../common/config/config.json';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            previews:[],
            authors:[]
        }
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <div className="ui container grid">
                <div className="column twelve wide">
                    <PreviewList previews={this.state.previews}/>
                </div>
                <div className="column four wide">
                    <Recommend  authors={this.state.authors}/>
                </div>
            </div>
        );
    }
}
