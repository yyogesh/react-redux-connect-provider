import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => { // redux state ===> component props 
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => { // sending from component to redux
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)