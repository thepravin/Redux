const { createStore } = require('redux');


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

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) =>{
    //console.log('Action Dispatched:', action);
    switch(action.type){
        case BUY_CAKE: return {
            ...state, // remain previous state unchanged
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()