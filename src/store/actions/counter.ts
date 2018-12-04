import { Action } from "redux"

export const CounterAction = {
  INCREMENT: "[Counter] Increment",
  DECREMENT: "[Counter] Decrement",
}

export interface ICountAction extends Action {
  type: string
}

export const incrementCount = () => {
  return { type: CounterAction.INCREMENT }
}

export const decrementCount = () => {
  return { type: CounterAction.DECREMENT }
}
