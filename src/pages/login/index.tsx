import React, { Component } from 'react'
import styles from './index.css'
import { connect } from 'dva'
import {getCaptcha, U} from './services'
class Login extends Component<any> {
    state={
        captcha:"",
        username:"",
        password:"",
        captcha_str:""
    }
    componentDidMount(){
        this.updateCaptcha()
    }
    updateCaptcha=()=>{
        getCaptcha().then((res:any)=>{
            this.setState({
                captcha:res.data
            })
        })
    }
    handleChange=(type:string,value:any)=>{
        this.setState({
            [type]:value
        })
    }
    render() {
        let {gologin} = this.props
        let {username, password, captcha_str,captcha} = this.state
        return (
            <div className="page center">
                <ul>
                    <li className="p10">用户名：<input value={username} onChange={(e)=>{ this.handleChange('username',e.target.value) }} className={styles.border} type="text"/></li>
                    <li className="p10">密码：<input value={password} onChange={(e)=>{this.handleChange('password',e.target.value)}} className={styles.border} type="password"/></li>
                    <li className="p10"><input value={captcha_str} onChange={(e)=>{this.handleChange('captcha_str',e.target.value)}} className={styles.border} type="text"/><span onClick={this.updateCaptcha} dangerouslySetInnerHTML={{__html:captcha}} /></li>
                    <li className="p10"><button className={styles.border} onClick={()=>{this.updateCaptcha(); gologin({username, password, captcha:captcha_str})}}>登陆</button></li>
                </ul>
            </div>
        )
    }
}

let mapDispatch = (dispatch:any)=> {
    return {
        gologin(params:U){
            dispatch({
                type: 'user/async_set_token',
                payload: params
            })
        }
    }
}
export default connect(null,mapDispatch)(Login)
