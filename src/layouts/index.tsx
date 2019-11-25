import React from 'react';
import styles from './index.css';
import Redirect from 'umi/redirect'

const BasicLayout: React.FC = (props:any) => {
  let {location} = props
  console.log(location.pathname)
  let islogined = !0;
  let permission = [{path:'/home/cart'}]
  if(permission.some((item)=> item.path === location.pathname ) && !islogined){
      return (
          <Redirect to="/login"/>
      )
  }

  return (
    <div className={styles.normal}  style={{height:'100%', overflow:'auto'}}>
      
      {props.children}

    </div>
  )
}

export default BasicLayout;
