import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'dva'
import styles from './goods.css'
import router from 'umi/router'
// C端  B端
let Goods = (props: any) => {
    let { dispatch, goodslist } = props
    let doc = useRef({ offsetHeight: 0, scrollHeight: 0, scrollTop: 0 })
    let win = useRef({ scrollTop: 0 })
    let [documentHeight, setDocumnetHeight] = useState(0)
    let [windowHeight, setWindowHeight] = useState(0)
    let [page, setPage] = useState(() => {
        if (goodslist.length > 0) {
            return (goodslist.length / 10);
        } else {
            return 1
        }
    })

    // 判断页面滚动到底部的公式
    //documentHeight - (scrollTop+windowHeight) < 100
    useEffect(() => {
        // 视窗高度
        setWindowHeight(document.body.offsetHeight)
        setDocumnetHeight(doc.current.offsetHeight);
        win.current.scrollTop = Number(localStorage.getItem('goodsscrolltop'));
        return () => {
            //cleanup
            localStorage.setItem('goodsscrolltop', JSON.stringify(win.current.scrollTop))
        };
    }, [])
    useEffect(() => {

        // 初始化请求第一页的数据
        if (goodslist.length / 10 !== page) {
            dispatch({
                type: "goods/GET_GOODS",
                payload: {
                    page
                }
            })
        }

    }, [page])

    useEffect(() => {
        //获取并设置滚动区域文档高度
        setDocumnetHeight(doc.current.offsetHeight);
    }, [goodslist])

    //防抖
    let debounce = (cb: any, ms: number) => {
        let timer: any = null;
        return (e: any) => {
            e.persist()
            clearTimeout(timer)
            timer = setTimeout(() => {
                cb(e)
            }, ms)
        }
    }

    let handleScroll = debounce((e: any) => {
        //当页面滚动接近底部时，距离达到100px以内
        if (documentHeight - (e.target.scrollTop + windowHeight) < 100) {
            console.log('scroll to end')
            setPage(page += 1)
        }
    }, 300)

    let toDetail = (id: number) => {
        router.push('/detail?product_id=' + id)
    }
    return (
        <div className={styles.goods} style={{ height: '100%', overflow: 'auto' }}>
            <h2 className="header">goods</h2>
            <div ref={win} className={styles['goods-list']} onScroll={handleScroll}>
                <ul ref={doc}>
                    {props.goodslist.map((item: any) => {
                        return <li key={item.product_id+item.rank}>
                            <dl onClick={() => { toDetail(item.product_id) }}>
                                <dt>
                                    <img src={item.img_url} />
                                </dt>
                                <dd>
                                    <p>{item.product_name}</p>
                                    <p>{item.author}</p>
                                    <p>{item.price.original_price}</p>
                                </dd>
                            </dl>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default connect((state: any) => {
    return {
        goodslist: state.goods
    }
})(Goods)
