import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-info ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Todos App</a>
                        </div>
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Todos Count : {this.props.lists.length} </a>
                        </div>
                    </nav>
                </div>

            </>
        )
    }
}

export default Navbar
