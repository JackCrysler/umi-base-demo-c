import React from 'react'

// C端  B端
let Home = (props:any)=>{
    
    return (
        <div className="flex-column" style={{height:'100%', overflow:'auto'}}>
            <div className="flex1">{props.children}</div>
            <div className="nav">
                <span>首页</span>
                <span>购物车</span>
                <span>个人中心</span>
            </div>
        </div>
    )
}

export default Home
