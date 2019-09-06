import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        const {title,handleEdit,handleDelete} = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h5>{title}</h5>
            </li>
        )
    }
}

export default TodoItem
