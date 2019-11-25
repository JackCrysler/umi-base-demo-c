import React from 'react'
import Redirect from 'umi/redirect'
// C端  B端
let HomeIndex = (props:any)=>{
    return (
        <Redirect to="/home/goods"  style={{height:'100%', overflow:'auto'}} />
    )
}

export default HomeIndex
