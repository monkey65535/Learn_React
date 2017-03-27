import React from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './Pc_news_block';
import PCNewsImgBlock from './PC_news_imagewall';
class PCNewsContainer extends React.Component {
    render() {
        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20} className="container">
                    <Col span={8} className="swiper">
                        <Carousel autoplay>
                            <div><img src="" alt=""/></div>
                            <div><img src="" alt=""/></div>
                            <div><img src="" alt=""/></div>
                            <div><img src="" alt=""/></div>
                        </Carousel>
                        <PCNewsImgBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imgWidth="112px;"></PCNewsImgBlock>
                    </Col>
                    <Col span={8}>
                        <Tabs>
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock count={22} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国内" key="2">
                                <PCNewsBlock count={22} type="guonei" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际" key="3">
                                <PCNewsBlock count={22} type="guoji" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="社会" key="4">
                                <PCNewsBlock count={22} type="shehui" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={8}></Col>
                </Col>
                <Col span={2}></Col>
            </Row>
        );
    }
};
export default PCNewsContainer;