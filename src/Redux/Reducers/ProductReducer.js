
import { ActionTypes } from "../Contants/Action-types";

const initialState = {
    Products: [],
}


export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return { ...state, Products: payload }
        default:
            return state
    }
}

export const ProductDetailsReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload }
        case ActionTypes.REMOVESELECTED_PRODUCT:
            return {}
        default:
            return state
    }
}