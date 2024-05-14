import { Component } from "react";

class Counter extends Component{

    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({count: this.state.count + 1})
    }

    decrementCount = () => {
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <>
                <h1>Counter App</h1>
                <h3> Count: {this.state.count}</h3>
                <div className="button">
                    <button onClick={this.incrementCount}>Increment</button>
                    <button onClick={this.decrementCount}>Decrement</button>

                </div>
            </>
           
        )
    }
    
}

export default Counter;