import React from "react";
class Child extends React.Component{
    constructor(props){
        super(props)
        this.state={moduleChild:"Book"}
    }
    componentDidMount(){
        console.log(this.props.hello)
    }
    render(){
        return(
            <div>
                    <h2>hello Child, {this.props.hello}</h2>
                    <h2> {this.state.moduleChild}</h2>
            </div>
        )
    }
}
export default Child;