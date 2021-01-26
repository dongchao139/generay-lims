import React from 'react';
import {history} from 'umi';

const Detail: React.FC = () => {
  return (
    <div className='container'>
      Option1 Detail {JSON.stringify(history.location.search)}
    </div>
  )
}

export default Detail;