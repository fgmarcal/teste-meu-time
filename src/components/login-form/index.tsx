import React from 'react'
import { Button, Form, Input } from 'antd';


const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
  };

const formTailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8, offset: 4 },
  };


const Login:React.FC = () => {

  const [form] = Form.useForm();

const onCheck = async () => {
        try {
        const values = await form.validateFields();
        console.log('Success:', values);
        } catch (errorInfo) {
        console.log('Failed:', errorInfo);
        }
    };

  return (
    <Form form={form} name="sign-up" style={{ maxWidth: 800 }} method='GET'>
        <Form.Item
            {...formItemLayout}
            name="key"
            label="Key"
            rules={[{ required: true, message: 'Insira uma chave (Key) válida' }]}
            style={{fontWeight:700}}
        >
            <Input placeholder="API Key" />
        </Form.Item>

        <Form.Item {...formTailLayout}>

            <Button type="primary" onClick={onCheck} onSubmit={(e)=>console.log(e)} style={{marginLeft:'4rem', color:'#000', fontWeight:800}}>
            Sign Up
            </Button>
        </Form.Item>
    </Form>
  )
}

export default Login
