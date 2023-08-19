const {createStore} = require("redux")
//state - count:0 
// action - increment, decrement, reset
// reducer
// store

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"

const initialState = {
    count: 0
}

const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}
const resetCounterAction = () => {
    return {
        type: RESET,
    }
}

// Creting Reduicer

const counterReducer = (state = initialState, action) => {
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
    case RESET:
        
        return {
            ...state,
            count: 0,
        }
 
    default:
        state;
 }
}

// store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());;
})


store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(resetCounterAction());








































// // state
// const INCREMENT = "INCREMENT";
// const DECREMENT = " DECREMENT";
// const ADD_USER = "ADD_USER"

// const inisialCounterState = {
//     count: 0,
// };

// const inisialUserState = {
//     users: [{name: "Ahaduzzaman Ahad"}]
// }

// const incrementCounter = () => {
//     return {
//         type: INCREMENT,
//     }
// }

// const decrementCounter = () => {
//     return {
//         type: DECREMENT,
//     };
// };

// const addUser = () => {
//     return {
//         type: ADD-USER,
//         payload: {name: "Mohamad"}
//     };
// };

// const counterReducer = (state= inisialCounterState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1,
//             }

//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1,
//             }

//         default:
//             state;
//     }
// }

// // action

// // store

// const store = createStore(counterReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })

// // dispathch action
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
// store.dispatch(decrementCounter())


