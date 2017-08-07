import {BrowserRouter, Route} from 'react-router-dom';
import Frame from './layout/Frame/Frame';
require('semantic/dist/semantic.min.css');
require('semantic/dist/semantic.js');

ReactDOM.render(
    <BrowserRouter>
        <Route path="/" component={Frame}/>
    </BrowserRouter>, document.getElementById('root'));

if (module.hot) {
    module
        .hot
        .accept();
}
