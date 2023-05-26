
import HighOrderComponent from "./HighOrderComponent";

const HighOrderComponent1 = (props) => {
  return (
    <div className="HighOrderComponent1">
      <h1>Bittu{props.d}</h1>
      <button onClick={props.Counter}>click</button>
    </div>
  );
};

export default HighOrderComponent(HighOrderComponent1);

