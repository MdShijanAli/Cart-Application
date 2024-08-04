import { ADDED, DELETED, UPDATED } from "./actionTypes"

export const added = (value)=>{
  return {
    type: ADDED,
    payload: value
  }
}

export const updated = (id, productQty)=>{
  return{
    type: UPDATED,
    payload: {
      id,
      productQty
    }
  }
}

export const deleted = (id)=>{
  return {
    type: DELETED,
    payload: id
  }
}