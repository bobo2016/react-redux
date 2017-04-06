import React, { Component } from  'react'

class Counter extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <h1>Counter: { this.props.value }</h1>
        <button className="btn btn-primary" onClick={this.props.onIncrement}>click me increment one</button>
        <button className="btn btn-primary" onClick={this.props.onDecrement}>click me decrement one</button>
      </div>
    )
  }
}


Counter.propTypes = {

}

export default Counter
