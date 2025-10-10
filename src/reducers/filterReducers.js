export const filterReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        
        case "PRODUCT_LIST":
            return {...state, productList: payload.products}

        case "COLOR":
            return {...state, color: payload.color}

        case "FABRIC":
            return {...state, fabric: payload.fabric}

        case "DESIGNER":
            return {...state, designer: payload.designer}

        case "SIZE":
            return {...state, size: payload.size}

        case "OCCASION":
            return {...state, occasion: payload.occasion}

        case "SORT_BY":
            return {...state, sortBy: payload.sortBy}

        case "REST_FILTER":
            return {
                productList: [],
                color: null,
                fabric: null,
                designer: null,    
                size: null,
                occasion: null,
                sortBy: null
            }

        default:
            throw new Error("No product found!");
    }
}