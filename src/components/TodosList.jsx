import React, { Component } from 'react'
import { FaTimes } from "react-icons/fa";

export class TodosList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);

    }

    render() {
        return (
            <>
                <div className='container'>
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-5">
                             <ul className="list-group">
                                {this.props.lists.map((list, index) => (
                                    <li className="list-group-item " key={index}>
                                        {list}
                                        <a className='btn btn-danger text-right'><FaTimes/></a>
                                    </li>
                                    ))}
                            </ul>
                        </div>
                          <div className="col-5">

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default TodosList
