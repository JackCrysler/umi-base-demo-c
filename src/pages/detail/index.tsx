import React, { Component } from 'react'
// setState 异步特点
export default class Detail extends Component {
    state={
        count:0
    }
    constructor(props:any){
        super(props)
        
    }
    static getDerivedStateFromProps(props:any,state:any){

        return {
            ...state,
            count: state.count+1
        }
        // this.setState({
        //     ...this.state,
        //     count:this.state.count+1
        // })
        // console.log(this.state.count)
        // this.setState({
        //     ...this.state,
        //     count:this.state.count+1
        // })
        // console.log(this.state.count)

        // let o = Object.assign({
        //     ...this.state,
        //     count:this.state.count+1
        // },{
        //     ...this.state,
        //     count:this.state.count+1
        // })
        // console.log('o:',o)
    }
    render() {
        // console.log(this.state.count)
        return (
            <div>
                <h1>detail page</h1>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
    componentDidMount(){
        // this.setState({
        //     ...this.state,
        //     count:this.state.count+1
        // })
        // console.log(this.state.count)

        //同步更新
        // setTimeout(()=>{
        //     this.setState({
        //         ...this.state,
        //         count:this.state.count+1
        //     })
        //     console.log(this.state.count)
        // },0)
    }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(props:any, state:any){
        console.log(state.count)
        return {}
    }
    componentDidUpdate(){
        // console.log(this.state.count)
    }
}
