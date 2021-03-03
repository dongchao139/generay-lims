import React, {useCallback, useEffect, useState} from 'react'
import { Table, Button,Select,Input,Modal,Form } from 'antd';
import './ProcessList.css';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};


interface IProcess {
  key: string;
  processName: string;
  icon: string;
  version: string;
  description: string;
  url: string;
  whenCreated: Date;
  createdBy: string;
}

const processList: Array<IProcess> = [
  {
    key: '1',
    processName: '采购',
    icon: '测试',
    version: '1.0',
    description: '采购流程',
    url: '/netStarRights/purchasenew',
    whenCreated: new Date(),
    createdBy: 'admin'
  },
  {
    key: '2',
    processName: '销售退货',
    icon: '测试',
    version: '1.1',
    description: '出库后退货',
    url: '/netStarRights/salesReturnRegistration',
    whenCreated: new Date(),
    createdBy: 'admin'
  },
  {
    key: '3',
    processName: '财务红冲',
    icon: '测试',
    version: '1.0',
    description: '采购流程',
    url: '/templateMindPages/pageConfig/1311631795787138034',
    whenCreated: new Date(),
    createdBy: 'admin'
  },
  {
    key: '4',
    processName: '销售流程v2.0',
    icon: '测试',
    version: '1.0',
    description: '销售流程v2.0',
    url: '/netStarRights/purchasenew',
    whenCreated: new Date(),
    createdBy: 'admin'
  },
  {
    key: '5',
    processName: '销售合同审批流程',
    icon: '测试',
    version: '1.0',
    description: '销售合同审批流程',
    url: '/netStarRights/contractObsoleteReview',
    whenCreated: new Date(),
    createdBy: 'admin'
  },
  {
    key: '6',
    processName: '合同中止',
    icon: '测试',
    version: '1.0',
    description: '合同中止流程',
    url: '/templateMindPages/pageConfig/1317366964401734642',
    whenCreated: new Date(),
    createdBy: 'admin'
  },
  {
    key: '7',
    processName: '采购合同审批流程',
    icon: '测试',
    version: '1.0',
    description: '采购合同审批流程',
    url: '/templateMindPages/toPage/1302343017402729449',
    whenCreated: new Date(),
    createdBy: 'admin'
  }
];

const columns = [
  {title: '流程名称',dataIndex: 'processName', key: 'processName'},
  {title: '流程标签',dataIndex: 'icon', key: 'icon'},
  {title: '版本',dataIndex: 'version', key: 'version'},
  {title: '描述',dataIndex: 'description', key: 'description'},
  {title: '表单URL',dataIndex: 'url', key: 'url'},
  {title: '创建时间',dataIndex: 'whenCreated', key: 'whenCreated'},
  {title: '创建人',dataIndex: 'createdBy', key: 'createdBy'},
]

const ProcessList: React.FC<IProcess> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <div className='btn-group'>
        <Button size='middle' onClick={() => setVisible(true)}>新增</Button>
        <Button size='middle' onClick={() => setVisible(true)}>编辑</Button>
        <Button size='middle'>设计流程图</Button>
        <Button size='middle'>流程配置</Button>
      </div>
      <div className="input-group">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
        >
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="tom">Tom</Select.Option>
        </Select>
        <Input style={{ width: 200 }} placeholder="Basic usage" />
        <div className="search-wrapper">
          <SearchOutlined />
        </div>
      </div>
      <Table dataSource={processList} columns={columns} size='middle'
        rowSelection={{type: 'checkbox'}}
      />  
      <Modal
       title="新增流程"
       visible={visible}
       okText="确认"
       cancelText="取消"
       onOk={()=>setVisible(false)}
       onCancel={()=>setVisible(false)}
      >
        <Form {...layout} size="middle">
          <Form.Item name="processName" label="流程名称" rules={[{required: true}]}>
            <Input />
          </Form.Item>
          <Form.Item name="processCate" label="流程标签">
          <Select
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
          </Form.Item>
          <Form.Item name="version" label="版本">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="描述">
            <Input />
          </Form.Item>
          <Form.Item name="url" label="url" rules={[{required: true}]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ProcessList;
