import React, { Component } from "react";
import PageHeaderWrapper from "@/components/pageHeaderWrapper";
import { Card, Form, Button, Input } from "antd";
import {
    Basic,
    Rules,
    // Wechat,
} from "@/components/marketing/coupon/add"

const FormItem = Form.Item;

@Form.create()
export default class CouponAdd extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render(){
        const { form } = this.props;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 4,
                },
            },
        };
        return <PageHeaderWrapper hiddenBreadcrumb={true}>
            <Card>
                <Form onSubmit={this.handleSubmit}>
                    <Basic
                        form={form}
                        formItemLayout={formItemLayout}
                    />
                    <Rules
                        form={form}
                        formItemLayout={formItemLayout}
                    />
                    {/* <Wechat
                        form={form}
                        formItemLayout={formItemLayout}
                    /> */}
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">保 存</Button>
                    </FormItem>
                </Form>
            </Card>
        </PageHeaderWrapper>
    }
}