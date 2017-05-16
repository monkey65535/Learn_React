// 函数式编程思想

// 创建一个状态管理中心的方法
function createStore(state, stateChanger) {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const disPatch = (action) => {
        stateChanger(state, action);
        listeners.forEach((listener) => listener());
    };
    return {getState, disPatch,subscribe};
}


// 渲染状态
function renderApp(appState) {
    console.log('render APP');
    renderTtile(appState.title);
    renderContent(appState.content);
}

function renderTtile(title) {
    console.log('render title');
    const titleDom = document.getElementById('title');
    titleDom.innerHTML = title.text;
    titleDom.style.color = title.color;
}

function renderContent(content) {
    console.log('render content');
    const titleDom = document.getElementById('content');
    titleDom.innerHTML = content.text;
    titleDom.style.color = content.color;
}


let appState = {
    title: {
        text: 'reactBook',
        color: 'red'
    },
    content: {
        text: 'reactBookContent',
        color: 'blue'
    }
};

// 修改状态需要通过change方法来进行修改
function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break;
    }
}


const store = createStore(appState,stateChanger);
store.subscribe(() => renderApp(store.getState()));
renderApp(store.getState());

store.disPatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'});// 修改标题文本
store.disPatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'});// 修改标题颜色