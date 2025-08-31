import React from 'react'
import { buyCake } from '../redux/cakes/cakeActions'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// The connect() function connects the React component to the Redux store,
// allowing it to access state (mapStateToProps) and dispatch actions (mapDispatchToProps) as a propes into component.
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) 
