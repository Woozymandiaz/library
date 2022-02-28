import React from "react";
import "./Header.css";

interface HeaderProps{
  title: any;
}

export const Header: React.FC<HeaderProps> = ({
  title,
}) => {

  return(
    <div className="Header">
      <span>{title}</span>
    </div>
  );
};