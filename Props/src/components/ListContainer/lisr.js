import React, { Component } from 'react';
class ListInfo extends Component {
    render() {
        const {time,name,content,avatar} = this.props;
        if(this.props.subComment){
            console.log(this.props.subComment)
        }
        let SUBLI = this.props.subComment ? this.props.subComment.map((item, i) => {return <ListInfo key={i} {...item} />}):'';
        return (
            <li>
                <div><img src={avatar} alt="" height="20" width="20"/>{name} - {time}</div>
                <p>
                    {content}
                </p>
                <ul>
                    {SUBLI}
                </ul>
            </li>
        );
    }
}
export default ListInfo;