const { createStore, combineReducers } = require('redux');


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return{
        type:BUY_CAKE,
        info: "any thing you and add but type is required."
    }
}

function buyIceCream(){
    return{
        type : BUY_ICECREAM
    }
}


// (previousState, action) => new state

const initialStateOfCake = {
    numOfCakes: 10
}

const initialStateOfIceCream = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialStateOfCake, action) =>{
    // console.log('Action Dispatched:', action);
    // console.log('Current State:', state);
    switch(action.type){
        case BUY_CAKE: return {
            ...state, // remain previous state unchanged
            numOfCakes: state.numOfCakes - 1
        }        
        default: return state
    }
}

const iceCreamReducer = (state = initialStateOfIceCream, action) =>{
    // console.log('Action Dispatched:', action);
    // console.log('Current State:', state);
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state, // remain previous state unchanged
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()