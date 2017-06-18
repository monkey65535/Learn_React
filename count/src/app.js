import {createStore} from 'redux';

// 定义action函数
function increment(){
    return {type:'INCREMENT'}
}

function decrement(){
    return {type:'DECREMENT'}
}


// 创建一个reducer
function counter(state = 0, action){
    // state添加默认参数为9
    // 下面的switch是传入action后执行的操作
    switch (action.type){
        case 'INCREMENT':
        return state + 1;
        case 'DECREMENT':
        return state - 1;
        // default
        default:
        return state;
    }
}


// 初始化一个store 并传入一个reducer

const store = createStore(counter,100);

// 获取store中的数据并进行渲染
let currentValue = store.getState();


// 监听store
const listener = () => {
    const previousValue = currentValue;
    currentValue = store.getState();
    console.log('pre state:', previousValue, 'next state:', currentValue);
}

store.subscribe(listener);



store.dispatch(increment());
store.dispatch(decrement());


// 封装dispatch调用
const boundIncrement = () => store.dispatch(increment());
const boundDecrement = () => store.dispatch(decrement());

// 那么调用他们就需要这样调用
boundIncrement();
boundDecrement();
boundDecrement();