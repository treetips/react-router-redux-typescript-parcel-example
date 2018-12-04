import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux"
import {
  decrementCount,
  ICountAction,
  incrementCount,
} from "../../store/actions/counter"

interface IProps {
  count: number
  incrementCount: Function
  decrementCount: Function
}

interface IState {
  counter: { counter: number }
}

const Component: React.SFC<IProps> = (props: IProps) => {
  const handleIncrementCount = () => props.incrementCount()
  const handleDecrementCount = () => props.decrementCount()

  return (
    <div>
      <h2>{props.count}</h2>
      <button onClick={handleIncrementCount}>+ increment</button>
      <button onClick={handleDecrementCount}>- decrement</button>
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return { count: state.counter.counter }
}
const mapDispatchToProps = (dispatch: Dispatch<ICountAction>) => {
  return bindActionCreators({ incrementCount, decrementCount }, dispatch)
}
export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
