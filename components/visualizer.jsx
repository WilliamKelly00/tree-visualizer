import React from 'react'
import styles from "../styles/visualizer.module.css"

export default function Visualizer({node}) {
  return (
    <>
    {
        node ?
    <div className={styles.node}>
      <div className={styles.spacer}>

      <h1 className={styles.value}>
        {node.value}
      </h1>
      </div>
        <div >
            <Visualizer node={node.left}/>
            <Visualizer node={node.right}/>
        </div>
    </div>
    : <></>
    }
    </>
  )
}
