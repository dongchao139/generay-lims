import React from 'react'
import {useMappedState, useDispatch} from 'redux-react-hook';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className='container' onClick={() => dispatch({type: 'opt1', tabName: 'Option1',payload: 'a'})}>
      Option1
    </div>
  )
}

export default Users;