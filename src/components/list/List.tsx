import React from 'react';
import './List.css';

interface ListProps{
  data: any;
}

export const List: React.FC<ListProps> = ({
  data,
}) => {

  return(
    <div className="List">
      {data?.map((item: any, index: any) => (
        <div className="Item" key={index}>
          <h3>🌍 {item.title?item.title:"Unknown author"}</h3>
          <p>💻 {item.author}</p>
          <p>🪄 <a href={item.url} target='_blank' rel="noreferrer">{item.url?item.url:"link unavailable"}</a></p>
        </div>
      ))}
    </div>
  );
};