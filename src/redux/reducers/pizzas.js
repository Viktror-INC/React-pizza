const allMyItems = {
    items: [],
    isLoaded: false,
}

const pizzas = (state = allMyItems, action) => {

    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
            break;
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
            break;
        default:
            return state;
    }
    return state;
}

export default pizzas;