import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}

const iceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of Ice Creams: {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer)
