import React, {Component} from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

// 修改Header组件，使其可以从父组件中获取store
class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  // 引入木偶组件之后可以删掉的公共代码
  // constructor() {
  //   super();
  //   this.state = {
  //     themeColor: ""
  //   }
  // }
  // // 在组件初始化结束之后调用update函数来获取共享状态
  // componentWillMount() {
  //   this._updateThemeColor();

  //   // 必须在这里调用监听变化方法subscribe
  //   const {store} = this.context;
  //   store.subscribe(() => this._updateThemeColor());
  //   // 通过 store.subscribe，在数据变化的时候重新调用 _updateThemeColor，而 _updateThemeColor 会去 store 里面取最新的 themeColor 然后通过 setState 重新渲染组件，这时候组件就更新了
  // }
  // // 定义获取context并设置state的函数
  // _updateThemeColor() {
  //   const {store} = this.context;
  //   const state = store.getState();
  //   console.log(state);
  //   this.setState({themeColor: state.themeColor});
  // }

  render() {
    return (
      <h1 style={{
        color: this.props.themeColor
      }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor:state.themeColor
  }
}

Header = connect(mapStateToProps)(Header);

export default Header