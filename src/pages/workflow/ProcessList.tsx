import { IState } from '@/store';
import React, {useCallback, useEffect} from 'react'
import {useMappedState, useDispatch} from 'redux-react-hook';
import { Link,history } from 'umi';

interface IProcess {
  processName: string;
  icon: string;
  url: string;
}

const ProcessList: React.FC<IProcess> = () => {
  return (
    <div>ProcessList</div>
  )
}

export default ProcessList;
