// @ts-nocheck
import React from 'react'
import styles from './index.less'

const mockData= new Array(9).fill(0)

const CardItem=(props)=>{
    return <div className={styles.item}>
        {props.idx}
    </div>
}

const GridLayout = () => {
  return (
    // <div
    //  className={styles.wrap}
    // >

    //     {
    //         mockData.map((item,idx)=>{
    //            return <CardItem idx={idx} key={idx}></CardItem>
    //         })
    //     }
    // </div>
<>
    <div className={styles.test}>
        <div>
            <div>1-1</div>
            <div>1-2</div>
        </div>
        <div>
        <div>2-1</div>
            <div>2-2</div>
        </div>
    </div>
     <div className={styles.test}>
     <div>
         <div>1-1</div>
         <div>1-2</div>
     </div>
     <div>
     <div>2-1</div>
         <div>2-2</div>
     </div>
 </div>
</>

  )
}

export default GridLayout