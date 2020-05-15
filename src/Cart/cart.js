import React from 'react';
import ReactDOM from 'react-dom';
import './cart.css';
import 'antd/dist/antd.css';
import { Radio, Form, Input, InputNumber, Button, Table } from 'antd';
import shopIcon from "./../Pic/shopIcon.png"


export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        console.log('radio checked', e.target.value);
        this.setState({value: e.target.value});
   };

   jump(e) {
       window.location.href = '/'
   }


   render() {
      var React = require('react');
      var QRCode = require('qrcode.react');
      const columns = [
        {
              title: 'Product',
          dataIndex: 'product',
        },
        {
          title: 'Subtotal',
          dataIndex: 'subtotal',
        },
      ];
      const data = [
          {
            key: '1',
            product: 'Purple Cap',
            subtotal: "$30.00",
          },
          {
            key: '2',
            product: 'Green Cap',
            subtotal: "$0.01",
          },
        ];
      const radioStyle = {
          display: 'block',
          height: '30px',
          lineHeight: '30px',
      };
      const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not validate email!',
          number: '${label} is not a validate number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };
      const onFinish = values => {
        console.log('Success:', values);
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };


      return (
        <body id='container1'>
        <div id="header">
            <img class='shopIcon' src={shopIcon}/>
        </div>
        <div id="container3">
        <QRCode value="http://facebook.github.io/react/" />
        <h1>Your Order</h1>
        <Table columns={columns} dataSource={data} size="middle" />
        </div>
        <div id='box'>
        <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio style={radioStyle} value={1}>
              Cash on delivery
            </Radio>
            <Radio style={radioStyle} value={2}>
              Alipay, WeChat Pay and UnionPay
            </Radio>
            <Radio style={radioStyle} value={3}>
              PayPal
            </Radio>
            <Radio style={radioStyle} value={4}>
              Other...
              {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
            </Radio>
        </Radio.Group>
        </div>
        <div className="container2">
            <h1 id="billing">Billing Details</h1>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
              <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={['user', 'website']} label="Address">
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'introduction']} label="Additional information">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Place Order
                </Button>
              </Form.Item>
            </Form>
        </div>
        <div id='box2'><Button type="primary" htmlType="back" onClick={this.jump.bind(this)}>
          Go Back
        </Button>
        </div>
        </body>
        )
    };

}

export default Cart
