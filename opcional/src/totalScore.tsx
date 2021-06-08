import React from "react";
import calcio  from  "./index.scss";


interface Props {}

export const TotalSass: React.FC<Props> = () => {

  return (
    <div>
        <h1 className={calcio.title}> Hola Mundo estilado con SASSveces</h1>
    </div>
  );
};