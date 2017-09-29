export const defaultState = {
    payments: [],
    loading: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case "PAYMENTS_SET_INFO":
            // update local storage
            return {
                ...state,
                payments: action.payload.payments
            };

        case "PAYMENTS_IS_LOADING":
            return {
                ...state,
                loading: true
            };

        case "PAYMENTS_IS_NOT_LOADING":
            return {
                ...state,
                loading: false
            };
    }
    return state;
};
