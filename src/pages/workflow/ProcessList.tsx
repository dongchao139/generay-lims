import { IState } from '@/store';
import React, {useCallback, useEffect} from 'react'
import {useMappedState, useDispatch} from 'redux-react-hook';
import { Link,history } from 'umi';
import { Table, Tag, Space } from 'antd';

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
  return (
    <div>
      <Table dataSource={processList} columns={columns} size='middle'/>  
    </div>
  )
}

export default ProcessList;
