import React from 'react'

// 登录表单
const Login: React.FC = () => {
    return (
      <div className='dialog'>
      <form>
        <div className='form-group'>
          用户名：<input type='text' name='username'/>
        </div>
        <div className='form-group'>
          密&emsp;码：<input type='password' name='password'/>
        </div>
        <button>登&emsp;录</button>
      </form>
    </div>
    )
}
export default Login;