import { useState } from "react";
import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onButtonClick}) => {
  
  
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonsNames.map((buttonName) => (
          <buttons className={styles.button} onClick={()=>onButtonClick(buttonName)} >{buttonName}</buttons>
        ))}
      </div> 
    </>
  );
};
export default ButtonsContainer;
