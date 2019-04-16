import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addActionCreator, deleteActionCreator } from './state/toDo'

class ToDo extends Component {

    state = {
        newTaskText: ''
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.newTaskText}
                    onChange={event => this.setState({
                        newTaskText: event.target.value
                    })}
                >
                </input>
                <button
                    onClick={() => this.props._addTask(this.state.newTaskText)}
                >
                    Dodaj
                </button>
                <ul>
                    {
                        this.props._tasks.map(
                            task => (
                                <li
                                    key={task.key}
                                    onClick={() => this.props._deleteTask(task.key)}
                                >
                                    {task.text}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _tasks: state.toDo.tasks
})


const mapDispatchToProps = dispatch => ({
    _addTask: (newTaskText) => dispatch(addActionCreator(newTaskText)),
    _deleteTask: (taskKey) => dispatch(deleteActionCreator(taskKey))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ToDo)