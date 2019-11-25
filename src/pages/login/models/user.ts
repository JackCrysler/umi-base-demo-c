import {login} from '../services'
import router from 'umi/router'
import Cookies from 'js-cookie'
interface S{
    token:string | null
}
interface A{
    type?:string,
    payload?:any 
}

let userModel = {
    namespaced:true,
    state:{
        token:null,
        buyer_name:''
    },
    reducers:{
        set_token(state:S, action:A){
            
            return {
                ...state,
                ...action.payload
            }
        }
    },
    effects:{
        *async_set_token(action:A, effects:any){
            let {call,put} = effects

            let res = yield call(login, {
                ...action.payload
            })
            
            if(res.code!=1){
                console.log(res.errors)
                return
            }
            yield put({
                type: 'set_token',
                payload: {
                    buyer_name:res.buyer_name,
                    token: res.token
                }
            })
            
            yield Cookies.set('token', res.token)

            yield router.push('/home/goods')

        }
    }
}

export default userModel
