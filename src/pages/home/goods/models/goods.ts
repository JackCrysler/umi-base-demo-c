import {getGoods} from '../services'
export default {
    namespaced: true,
    state:[],
    reducers:{
        SET_GOODS(state:[], action:any){
            return [...state,...action.payload]
        }
    },
    effects:{
        *GET_GOODS(action:any, effects:any){
            let {call, put} = effects
            let res = yield call(getGoods, action.payload)
            if(res.code==1){
                yield put({
                    type:"SET_GOODS",
                    payload: res.data
                })
            }else{
                console.log(res.msg)
            }
            
        }
    }
}
