import { IState } from '@/store';
import React, {useCallback, useEffect} from 'react'
import {useMappedState, useDispatch} from 'redux-react-hook';
import { Link,history } from 'umi';

interface IItem {
  name: string;
  id: number;
}

const defaultList: IItem[] = [{
  name: 'a',
  id: 1
},{
  name: 'b',
  id: 2
}]

const Users: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'init-list',
      tabName: 'Option1',
      payload: defaultList
    })
  },[]);
  const mapList = useCallback((state: IState) => {
    return {
      list: state['Option1'] && state['Option1'].list
    }
  },[]);
  const {list} = useMappedState(mapList);
  const handleClick = (item: IItem) => {
    dispatch({
      type: 'add-tab',
      payload: {
        optName: 'Option1Detail',
        search: "?id=" + item.id
      },
    });
    history.push({
      pathname: "/pages/Option1Detail",
      search: "?id=" + item.id
    });
  }
  return (
    <div className='container' onClick={() => dispatch({type: 'opt1', tabName: 'Option1',payload: 'a'})}>
      Option1
      <ul>
        {list && list.map((item: IItem) => {
          return (
            <li>
              <a onClick={() => handleClick(item)}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Users;