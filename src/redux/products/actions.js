import { ADD } from "./actionTypes"

export const add = (value) => {
  return {
    type: ADD,
    payload: value
  }
}