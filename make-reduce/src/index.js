/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/


const appState = {
    title:{
        text:'reactBook',
        color:'red'
    },
    content:{
        text:'reactBookContent',
        color:'blue'
    }
};

function renderApp(appState){
    renderTtile(appState.title);
    renderContent(appState.content);
}

function renderTtile(title) {
    const titleDom = document.getElementById('title');
    titleDom.innerHTML = title.text;
    titleDom.style.color = title.color;
}



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

function renderContent (content) {
    const titleDom = document.getElementById('content');
    titleDom.innerHTML = content.text;
    titleDom.style.color = content.color;
}

renderApp(appState);


disPatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
disPatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
renderApp(appState);