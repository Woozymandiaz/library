import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/reducer";
import "./Input.css";

interface InputProps{
  mglass: string;
  callback: any;
}

export const Input: React.FC<InputProps> = ({
  mglass,
  callback,
}) => {

  const data = useSelector<IState, IState["data"]>(state => state.data);
  const dispatch = useDispatch();

  const handleInput = (event: any) => {
    dispatch({ type: "DATA", payload: event.target.value });
  }

  const handleClick = () => {
    callback(data);
  }

  return(
    <div className="Input">
      <input type="text" onChange={handleInput}/>
      <button className="button" onClick={handleClick}>{mglass}</button>
    </div>
  );
};