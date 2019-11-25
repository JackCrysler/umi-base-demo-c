import request from '@/utils'

//captcha 获取验证码
export let getCaptcha = ()=>{
    return request('/buyer/user/captcha',{
        method:"GET"
    })
}

//login 登陆
export interface U{
    username:string,
    password:string,
    captcha:string
}
export let login = (params:U)=> {
    return request('/buyer/user/login',{
        method:"POST",
        params
    })
}
