import {TreeNode} from '../components/node.js';
import Visualizer from '../components/visualizer.jsx';
import styles from "../styles/Home.module.css";

const buildTree = (values, index) => {
    let root = null;

    if(index < values.length){
        root = new TreeNode(values[index]);
        root.left = buildTree(values, 2 * index + 1);
        root.right = buildTree(values, 2 * index + 2);
    }

    return root;
}

export default function Home() {

  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,];
  
  const root = buildTree(values, 0);




  return (
    <div className={styles.container}>
      <Visualizer node={root}/>
    </div>
  )
}
