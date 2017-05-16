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
function renderApp(newAppState, oldAppState = {}) {
    //es6 函数默认参数 oldAppState = {}
    // 当数据未发生变化的时候不进行渲染
    if(newAppState === oldAppState) return; 
    console.log('render APP');
    renderTtile(newAppState.title);
    renderContent(newAppState.content);
}

function renderTtile(newTtile,oldTitle = {}) {
    // 当数据未发生变化的时候不进行渲染
    if(newTtile === oldTitle) return; 

    console.log('render title');
    const titleDom = document.getElementById('title');
    titleDom.innerHTML = newTtile.text;
    titleDom.style.color = newTtile.color;
}

function renderContent(newContent, oldContent = {}) {
    // 当数据未发生变化的时候不进行渲染
    if(newContent === oldContent) return; 

    console.log('render content');
    const titleDom = document.getElementById('content');
    titleDom.innerHTML = newContent.text;
    titleDom.style.color = newContent.color;
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
// 创建一个变量来缓存旧的state
let oldState = store.createStore();
store.subscribe(() => {
    const newState = store.getState();  //获取新的store
    renderApp(newState, oldState);        //传入新旧数据进行渲染
    oldState = newState;        //替换旧的store
});
renderApp(store.getState());

store.disPatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'});// 修改标题文本
store.disPatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'});// 修改标题颜色