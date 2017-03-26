import React from 'react';
import {Row, Col} from 'antd';
// eslint-disable-next-line
import {Menu,Icon,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
// eslint-disable-next-line
import {Router, Route, Link, browserHistory} from 'react-router';

const FormItem = Form.Item;
// eslint-disable-next-line
const SubMenu = Menu.SubMenu;
// eslint-disable-next-line
const TabPane = Tabs.TabPane;
// eslint-disable-next-line
const MenuItemGroup = Menu.ItemGroup;

import './css/header.css'

class PcHeader extends React.Component {
    constructor() {
        //state
        super();
        this.state = {
            current: 'top',
            modalVisable: false,
            action: 'register',
            hasLogined: false,
            userNickName: ''
        };
    }
    //设置模态框展示隐藏
    setModelVisible(value) {
        this.setState({
            modalVisable: value
        });
    }
    handleClick(e) {
        console.log(e.key);
        if(e.key === "register"){
            this.setState({
                current:'register'
            });
            this.setModelVisible(true);
        }else{
            this.setState({
                current:e.key
            })
        }
    }
    //提交
    handleSubmit(ev) {
        ev.preventDefault();
        let myFetchOptions = {
            method:'GET'
        };
        // 获取表单内的值
        let formData = this.props.form.getFieldsValue();
        console.log(formData);
        //调用
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=${this.state.action}&username=${formData.userName}&password=${formData.password}&r_userName=${formData.r_userName}&r_password=${formData.r_password}&r_confirmPassword=${formData.r_confirmPassword}`,myFetchOptions)
        .then(response => response.json())
        .then(json => {
            this.setState({
                userNickName: json.NickUserName,
                userId:json.userId
            });
        });
        message.success('请求成功');
        this.setModelVisible(false);
    }

    //render
    render() {
        let {getFieldDecorator} = this.props.form;

		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
					<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
					&nbsp;&nbsp;
					<Link target="_blank" to={`/usercenter`}>
						<Button type="dashed" htmlType="button">个人中心</Button>
					</Link>
					&nbsp;&nbsp;
					<Button type="ghost" htmlType="button" >退出</Button>
				</Menu.Item>
			: <Menu.Item key="register" class="register">
				<Icon type="user"/>注册/登录
			</Menu.Item>;
        
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./imgs/logo.pngta" alt=""/>
                            <span>React News</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal title="用户中心" 
                        warpClassName="vertical-center-model" 
                        visible={this.state.modalVisable} 
                        onCancel={() => this.setModelVisible(false)} 
                        onOk={() => this.setModelVisible(false)}
                        okText="关闭">
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                        {getFieldDecorator('r_userName', { rules: [{ required: true, message: '请输入您的账号', whitespace: true }],})(<Input /> )}
                                        </FormItem>
                                        <FormItem label="密码">
                                             {getFieldDecorator('r_password', { rules: [{ required: true, message: '请输入您的密码', whitespace: true }],})(<Input type="password"/> )}
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {getFieldDecorator('r_confirmPassword', { rules: [{ required: true, message: '请再次输入您的密码', whitespace: true }],})(<Input type="password"/> )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}

export default PcHeader = Form.create({})(PcHeader);