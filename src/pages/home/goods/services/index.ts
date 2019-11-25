import request from '@/utils'

interface goodsInput{
    page:number
}
export let getGoods = (params:goodsInput)=>{
    return request('/store/goods/goodslist', {
        method:"GET",
        params
    })
}
