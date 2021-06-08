import React from "react";
import { getAvg } from "./averageService";
import calcio  from  "./averageComponentStyles.scss";


interface Props {}

export const AverageComponent: React.FC<Props> = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  },[]);

  return (
    <div>
        <span className={calcio.title}>Goku muere un total de : {average} veces</span>
    </div>
  );
};