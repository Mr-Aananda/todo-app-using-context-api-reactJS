import React, { Component } from 'react'

export class TodosAdd extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <>
                <form>
                    <div className="mb-3 ">
                        <div className="row">
                            <div className="col-1">
                                <label htmlFor="todos" className="form-label" >Entry Todos:</label>
                            </div>
                            <div className="col-7">
                                <input type="text" value={this.props.item} onChange={this.props.changeItem} className="form-control" id="todos"/>
                            </div>

                            <div className="col-4">
                                <button type="submit" onClick={this.props.addItems} className="btn btn-warning">Submit</button>

                            </div>
                        </div>
                    </div>

                </form>

            </>
        )
    }
}

export default TodosAdd
