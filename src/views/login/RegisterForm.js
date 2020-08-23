import React, {Component} from "react";

import { Form, Input, Button, Row, Col,  } from 'antd';
import { UserOutlined, UnlockOutlined, } from '@ant-design/icons';
import "./index.scss";

class RegisterForm extends Component{
    constructor(){
        super();
        this.state ={};
    }
    //登录
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };    
    toogleForm = () =>{
        //调父级的方法
        this.props.switchForm("login");
    }
    render(){
        return (
            <div>
                <div className="form-header">
                        <h4 className="column">账号注册</h4>
                        <span onClick={this.toogleForm}>账号登录</span>
                </div>
                <div className="form-content">
                    <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={()=> this.onFinish}>
                                <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                                </Form.Item>


                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入注册密码" />
                                </Form.Item>
                            
                                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                                <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请确认密码" />
                                </Form.Item>
                                <Form.Item name="code" rules={[{ required: true, message: 'Please input your password!' }]}>
                                    
                                
                                    <Row gutter={13}>
                                        <Col span={15}>
                                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                                        </Col>
                                        <Col span={9}>
                                            <Button  type="danger" block onClick={this.getCode}>获取验证码</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary"htmlType="submit"className="login-form-button" block>注册</Button>
                                </Form.Item>
                            </Form>
                </div>
            </div>
        )
            
    }
}

export default RegisterForm;