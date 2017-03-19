import React from 'react';
class IndexBody extends React.Component{
    render() {
        // 插入参数
        const userName = 'parts';
        const btnType = false;
        // 插入HTML
        let htmlTemp = '<h1>this is a text</h1>';
        return (
            <div id="indexbody">
                <p>这里是index的body</p>
                <p>{userName === "" ? "尚未登陆" : "用户名为 + " + userName }</p>
                <p><input type="button" value={userName} disabled={btnType}/></p>
                {/*这是一个注释*/}
                <p>{htmlTemp}</p>
                <p dangerouslySetInnerHTML={{__html:htmlTemp}}></p>
            </div>
        )
    }
}
export default IndexBody;