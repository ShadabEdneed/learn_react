import { ActionTypes } from "../Contants/Action-types";

export const SetProduct = (product) => {
    return {
        type:ActionTypes.SET_PRODUCT,
        payload:product,
    }
}

export const SelectedProduct = (select) => {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:select,
    }
}

export const RemoveSelectedProduct = (remove) => {
    return {
        type:ActionTypes.REMOVESELECTED_PRODUCT,
        payload:remove,
    }
}