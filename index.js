const {createStore} = require("redux")
// state
const INCREMENT = "INCREMENT";
const DECREMENT = " DECREMENT";
const ADD_USER = "ADD_USER"

const inisialCounterState = {
    count: 0,
};

const inisialUserState = {
    users: [{name: "Ahaduzzaman Ahad"}]
}

const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

const addUser = () => {
    return {
        type: ADD-USER,
        payload: {name: "Mohamad"}
    };
};

const counterReducer = (state= inisialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }

        default:
            state;
    }
}

// action

// store

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispathch action
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter())
store.dispatch(decrementCounter())


