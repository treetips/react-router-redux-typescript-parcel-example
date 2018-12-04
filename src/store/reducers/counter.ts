import { CounterAction, ICountAction } from "../actions/counter"

export interface CounterState {
  counter: number
}

const initialState: CounterState = {
  counter: 0,
}

export default function reducer(
  state: CounterState = initialState,
  action: ICountAction
): CounterState {
  switch (action.type) {
    case CounterAction.INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case CounterAction.DECREMENT:
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
