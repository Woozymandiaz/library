import React from "react";
import "./Section.css";

interface SectionProps{
  className: any;
  children: any;
}

export const Section: React.FC<SectionProps> = ({
  className,
  children,
}) => {

  return(
    <div className={className}>
      {children}
    </div>
  );
};