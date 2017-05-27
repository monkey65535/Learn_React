import React, {Component} from 'react';
import PropTypes from 'prop-types';

// 建立一个木偶组件作为中间层 期望接收一个这样的函数，函数接受state.getState()的结果作为参数，返回一个对象，这个对象是根据state生成的。
// mapStateToProps相当于告知了connect组件要如何去store中获取数据，然后可以将这个函数的返回结果传给被包装的组件 const
// mapStateToProps = (state) => {   return {     themeColor: state.themeColor,
//   themeName: state.themeName,     fullName: `${state.firstName}
// ${state.lastName}`     ...   } }

export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
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