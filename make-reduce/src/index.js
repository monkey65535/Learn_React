/*
 import React from 'react';
 import ReactDOM from 'react-dom';
 import App from './App';

 ReactDOM.render(
 <App />,
 document.getElementById('root')
 );
 */


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

function renderApp(appState) {
    renderTtile(appState.title);
    renderContent(appState.content);
}

function renderTtile(title) {
    const titleDom = document.getElementById('title');
    titleDom.innerHTML = title.text;
    titleDom.style.color = title.color;
}

function renderContent(content) {
    const titleDom = document.getElementById('content');
    titleDom.innerHTML = content.text;
    titleDom.style.color = content.color;
}


/*
 function disPatch(action){
 switch (action.type){
 case 'UPDATE_TITLE_TEXT':
 appState.title.text = action.text;
 break;
 case 'UPDATE_TITLE_COLOR':
 appState.content.color = action.color;
 break;
 default:
 break;
 }
 }
 */

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

const store = createStore(appState,stateChanger);
store.subscribe(() => renderApp(store.getState()));
renderApp(store.getState());

store.disPatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'});// 修改标题文本
store.disPatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'});// 修改标题颜色