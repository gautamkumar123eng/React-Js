
import { useState } from "react";
const HighOrderComponent = (OriginalComponent) => {
  const NewComponent = (props) => {
    const [data, setData] = useState(0);
    const counter = () => {
      setData(data + 1);
    };
    return <OriginalComponent Counter={counter}d={data}/>;
  };

  return NewComponent;
};
export default HighOrderComponent;
