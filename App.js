import React from 'react';
import Child from './Child.js';
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={module:"pen"};
  }
  render()
  {
   return(
      <div>
        <h1>type: {this.state.module}</h1>
        <Child hello="ram"/>
      </div>
   );
}}
export default App;
 
