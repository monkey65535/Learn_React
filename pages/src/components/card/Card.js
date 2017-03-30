/**
 * Created by Artoria on 2017/3/30 0030.
 */

import React from 'react';

class Card extends  React.Component {
    render() {
        console.log(this.props);
        return(
            <div className="card">
                {this.props.children}
            </div>
        );
    }
}

export default Card;