import React from 'react';
import {Row, Col} from 'antd';
import './css/footer.css';

class FooterComponent extends React.Component{
    render() {
        return (
            <footer className="footer-component">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2016 ReactNews. All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}

export default FooterComponent;