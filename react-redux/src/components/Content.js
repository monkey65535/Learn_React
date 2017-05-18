import React from 'react';
import PropTypes from 'prop-types';
import ThemeSwitch from './ThemeSwitch';

class Content extends React.Component {
    static contextTypes = {
        store: PropTypes.object
    }
    constructor() {
        super();
        this.state = {
            themeColor: ''
        }
    }
    componentWillMount() {
        const {store} = this.context;
        this._updateThemeColor();
        store.subscribe(() => this._updateThemeColor());
    }
    _updateThemeColor() {
        // 定义store
        const {store} = this.context;
        const state = store.getState();
        this.setState({themeColor: state.themeColor});
    }
    render() {
        return (
            <div>
                <p style={{color:this.state.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch/>
            </div>
        )
    }
}
export default Content;
