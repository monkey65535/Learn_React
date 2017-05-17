// 函数式编程思想

// 创建一个状态管理中心的方法
function createStore(reducer) {
    let state = null;
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action) // 覆盖原对象
        listeners.forEach((listener) => listener())
    }
    dispatch({}); //初始化state
    return {
        getState,
        dispatch,
        subscribe
    }
}


// 渲染状态
function renderApp(newAppState, oldAppState = {}) {
    //es6 函数默认参数 oldAppState = {}
    // 当数据未发生变化的时候不进行渲染
    if (newAppState === oldAppState) return;
    console.log('render APP');
    renderTtile(newAppState.title);
    renderContent(newAppState.content);
}

function renderTtile(newTtile, oldTitle = {}) {
    // 当数据未发生变化的时候不进行渲染
    if (newTtile === oldTitle) return;

    console.log('render title');
    const titleDom = document.getElementById('title');
    titleDom.innerHTML = newTtile.text;
    titleDom.style.color = newTtile.color;
}

function renderContent(newContent, oldContent = {}) {
    // 当数据未发生变化的时候不进行渲染
    if (newContent === oldContent) return;

    console.log('render content');
    const titleDom = document.getElementById('content');
    titleDom.innerHTML = newContent.text;
    titleDom.style.color = newContent.color;
}

// 修改状态需要通过change方法来进行修改
function stateChanger(state, action) {
    if (!state) {
        return {
            title: {
                text: 'React.js小书',
                color: 'red'
            },
            content: {
                text: 'React.js小书的内容',
                color: 'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state;
    }
}


const store = createStore(stateChanger)
let oldState = store.getState() // 缓存旧的 state
store.subscribe(() => {
    const newState = store.getState() // 数据可能变化，获取新的 state
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})
renderApp(store.getState());

store.dispatch({
    type: 'UPDATE_TITLE_TEXT',
    text: '《React.js 小书》'
}) // 修改标题文本
store.dispatch({
    type: 'UPDATE_TITLE_COLOR',
    color: 'blue'
}) // 修改标题颜色