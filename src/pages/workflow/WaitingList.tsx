import React, { useCallback, useEffect, useState } from 'react'
import { Card,Modal } from 'antd';
import "./WaitingList.css";

interface IWaitingList {
  count: number;
  activityName: string;
  processName: string;
  lastDate: string;
}

const waitingList: Array<IWaitingList> = [
  { "processName": "文件发放流程", "activityName": "文件借阅审批", count: 20, lastDate: "1天前" },
  { "processName": "人员培训计划申请", "activityName": "培训计划审核", count: 33, lastDate: "2天前" },
  { "processName": "测试流程0928", "activityName": "环节2", count: 10, lastDate: "1分钟前" },
  { "processName": "疑似职业病填报流程", "activityName": "疑似职业病结果录入", count: 12, lastDate: "1天前" },
  { "processName": "职业病鉴定填报流程职业病鉴定填报流程", "activityName": "职业病鉴定结果录入职业病鉴定填报流程职业病鉴定填报流程", count: 25, lastDate: "1个月前" },
  { "processName": "职业病病例填报流程", "activityName": "职业病病例结果录入", count: 42, lastDate: "10天前" },
  { "processName": "农药中毒填报流程", "activityName": "农药中毒登记", count: 50, lastDate: "8天前" },
  { "processName": "文件发放流程", "activityName": "文件借阅申请", count: 60, lastDate: "7天前" },
  { "processName": "机会跟进流程", "activityName": "机会录入", count: 80, lastDate: "1小时前" },
]
const WaitingList: React.FC<IWaitingList> = () => {
  return (
    <>
      <p className="waiting-title">
        我的待办任务
        </p>
      {waitingList && waitingList.map(waiting => (
        <div className="waiting-card">
          <Card
            hoverable
            style={{ borderRadius: 10 }}
          >
            <Card.Meta
              title={waiting.activityName}
              description={
                <>
                  <p className="waiting-card-subtitle">{waiting.processName}</p>
                  <p className="waiting-card-description">{waiting.lastDate}</p>
                </>
              }
              avatar={
                <span className="waiting-card-number">
                  {waiting.count}
                </span>
              }
            />
          </Card>
        </div>
      ))}
    </>
  )
}

export default WaitingList;