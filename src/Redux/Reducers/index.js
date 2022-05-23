import { combineReducers } from "redux";
import { ProductReducer, ProductDetailsReducer } from "./ProductReducer";


const Reducers = combineReducers({
    allProducts : ProductReducer,
    Products: ProductDetailsReducer,
})

export default Reducers;