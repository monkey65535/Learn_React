// 改进Connect 

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSwitchColor: (color) => {
//       dispatch({ type: 'CHANGE_COLOR', themeColor: color })
//     }
//   }
// }

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 我们需要这样一个函数来获取，整合状态
export const Connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }
    constructor() {
      super();
      this.state = {
        allProps: {}
      };
    }

    componentWillMount() {
      const {store} = this.context;
      this._updateProps();
      store.subscribe(() => this._updateProps())
    }

    _updateProps() {
      const {store} = this.context;
      // 防止 mapStateToProps 没有传入
      let stateProps = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {};
      // 防止 mapDispatchToProps 没有传入
      let dispatchProps  = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {};

      this.setState({
        allProps: {
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }
    render() {
      return <WrappedComponent {...this.state.allProps}/>
    }
  }

  return Connect;
}