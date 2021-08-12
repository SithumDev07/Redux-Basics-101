import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function ToDo({text, onButtonClick, id}) {
    return (
        <li>
            <Link to={`${id}`}>
            {text} 
            </Link>
            <button onClick={onButtonClick}>Delete</button>
        </li>
    )
}

function mapStateToProps(dispatch, ownProps) {
    return {
        onButtonClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}

export default connect(null, mapStateToProps)(ToDo);