import React from "react";
import "./Input.css";

interface InputProps{
  mglass: string;
  callback: any;
}

export const Input: React.FC<InputProps> = ({
  mglass,
  callback,
}) => {

  const [data, setData] = React.useState("");

  const handleInput = (event: any) => {
    setData(event.target.value);
  }

  const handleClick = () =>{
    callback(data);
  }

  return(
    <div className="Input">
      <input type="text" onChange={handleInput}/>
      <button className="button" onClick={handleClick}>{mglass}</button>
    </div>
  );
};