


const middlewareDemo = ({ getState, dispatch }) => next => action =>{
  console.log(getState)
  console.log(dispatch)
  console.log(action);
}

export default middlewareDemo
