import React, { Component } from 'react'

 class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem}=this.props
        console.log(item)
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-warning text-white">
                            <i className="fa fa-book fa-2x" aria-hidden="true"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control form-control-lg text-capitalize" placeholder="add todo item"  value={item} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-block btn-info mt-3 text-uppercase font-weight-bold">Add Item</button>
                </form>
            </div>
        )
    }
}

export default TodoInput
