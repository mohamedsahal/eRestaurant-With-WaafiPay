export const initialState = {
    products: [],
    total: 0
}


const shopReducer = (state,action) =>{
    const {type,payload} = action

    switch(type){
        case "ADD_TO_CART":
            return{
                ...state,
                products: payload.products
            }

            case "REMOVE_FROM_CART":
                return{
                    ...state,
                    products: payload.products
                }

            case "CALCULATE_PRODUCT_PRICE":
                return{
                    ...state,
                    total: payload
                }

        default:
            throw new Error ("Invalid")
    }
}

export default shopReducer