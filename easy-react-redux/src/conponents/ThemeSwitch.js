import React, {Component} from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  constructor() {
    super();
    this.state = {
      themeColor: ""
    }
  }
  // 在组件初始化结束之后调用update函数来获取共享状态
  componentWillMount() {
    this._updateThemeColor();
    // 必须在这里调用监听变化方法subscribe
    const {store} = this.context;
    store.subscribe(() => this._updateThemeColor());
    // 通过 store.subscribe，在数据变化的时候重新调用 _updateThemeColor，而 _updateThemeColor 会去 store 里面取最新的 themeColor 然后通过 setState 重新渲染组件，这时候组件就更新了
  }
  // 定义获取context并设置state的函数
  _updateThemeColor() {
    const {store} = this.context;
    const state = store.getState();
    this.setState({themeColor: state.themeColor});
  }
  // 定义修改颜色事件
  handleSwitchColor(color) {
    const {store} = this.context;
    // 只是调用dispatch方法是没用用的，因为我们只是更新了上面这个store
    store.dispatch({type: 'CHANGE_COLOR', themeColor: color});
  }
  render() {
    return (
      <div>
        <button
          style={{
          color: this.state.themeColor
        }}
          onClick={this
          .handleSwitchColor
          .bind(this, 'red')}>Red</button>
        <button
          style={{
          color: this.state.themeColor
        }}
          onClick={this
          .handleSwitchColor
          .bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch