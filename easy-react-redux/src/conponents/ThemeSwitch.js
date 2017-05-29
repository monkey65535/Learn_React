import React, {Component} from 'react'
import PropTypes from 'prop-types';


class ThemeSwitch extends Component {

  // 添加一个函数props
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  // 定义修改颜色事件
  handleSwitchColor(color) {    
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }

  render() {
    return (
      <div>
        <button
          style={{
          color: this.props.themeColor
        }}
          onClick={this
          .handleSwitchColor
          .bind(this, 'red')}>Red</button>
        <button
          style={{
          color: this.props.themeColor
        }}
          onClick={this
          .handleSwitchColor
          .bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch;