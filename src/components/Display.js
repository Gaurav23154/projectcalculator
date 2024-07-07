import styles from './Display.module.css'
const Display = ({displayVal}) =>{
return <>
<input className={styles.display}  type= "text" placeholder="Write your math" value={displayVal}/></>
}
export default Display;