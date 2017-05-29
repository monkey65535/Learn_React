import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 建立一个木偶组件作为中间层 期望接收一个这样的函数，函数接受state.getState()的结果作为参数，返回一个对象，这个对象是根据state生成的。
// mapStateToProps相当于告知了connect组件要如何去store中获取数据，然后可以将这个函数的返回结果传给被包装的组件 const
// mapStateToProps = (state) => {   return {     themeColor: state.themeColor,
// themeName: state.themeName,     fullName: `${state.firstName}
// ${state.lastName}`     ...   } }

export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        // 定义对内容结构的修改
        constructor() {
            super();
            // 初始化allProps 用来保存需要传给被包装组件的所有参数
            this.state = {
                allProps: {}
            }
        }
        // 调用_updateProps进行初始化
        componentWillMount() {
            const {store} = this.context;
            this._updateProps();
            // 监听数据变化重新调用_updateProps
            store.subscribe(() => this._updateProps());
        }

        _updateProps() {
            const {store} = this.context
            let stateProps = mapStateToProps(store.getState(), this.props) // 额外传入 props，让获取数据更加灵活方便
            this.setState({
                allProps: { // 整合普通的 props 和从 state 生成的 props
                    ...stateProps,
                    ...this.props
                }
            })
        }

        render() {
            const {store} = this.context
            let stateProps = mapStateToProps(store.getState())
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...stateProps}/>
        }
    }

    return Connect
}

// connect 现在是接受一个参数 mapStateToProps， 然后返回一个函数，这个返回的函数才是高阶组件。 它会接受一个组件作为参数，然后用
// Connect 把组件包装以后再返回

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}