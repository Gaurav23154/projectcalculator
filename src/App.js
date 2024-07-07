
import './App.css';
import { useState} from 'react';
import Display from './components/Display';
import styles from './components/App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
function App() {
  const [calVal,setCalVal]=useState("");
 const  onButtonClick=(event)=>{
  if(event==='C'){
     setCalVal("");
  }else if(event==='='){
    const result=eval(calVal);
    setCalVal(result);
  }
  else{
    const newDisplayvalue=calVal+event;
    setCalVal(newDisplayvalue);
  }
 };
  return (
    <div className={styles.calculator}>
    <Display displayVal={calVal}/>
    <ButtonsContainer onButtonClick={onButtonClick}/>
   
    </div>
    
  );
}

export default App;
