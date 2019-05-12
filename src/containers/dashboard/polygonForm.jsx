import React, { Component } from 'react';
import Modal from 'antd/lib/modal';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';

class PolygonForm extends Component {


    handleOk = (e) => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.props.saveArea(values);
              this.props.form.resetFields();
            }
          });
        
    }

    handleCancel = () => {
        this.props.cancel();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                <Modal
                    title="Save Area"
                    visible={this.props.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleOk}>
                        <Form.Item>
                            {getFieldDecorator('area_name', {
                                rules: [{ required: true, message: 'Please input area name' }],
                            })(
                                <Input placeholder="Area name" />
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

export default PolygonForm = Form.create()(PolygonForm);



