import React, { Component } from 'react'
import TodosAdd from './TodosAdd'
import TodosList from './TodosList'
import Navbar from '../components/Navbar'

export class Todos extends Component {
    constructor() {
        super();
            this.state = {
                todo: '',
                items:[],
            // items: JSON.parse(localStorage.getItem("items")) || [],
        }

    }
    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            todo: e.target.value
        })
    }
    formHandeler = (e) => {
        e.preventDefault();
        this.setState({
            todo: '',
            items: [...this.state.items, this.state.todo]
        });

        // localStorage.setItem("items",JSON.stringify([...this.state.items, this.state.todo]))
    }
    //  deleteHandeler = index => {
    //     const deleteTodo =[...this.state.items];
    //     deleteTodo.splice(index, 1);
    //     this.setState({
    //         items=deleteTodo

    //     })
    //         alert('want to delete?')
    // }

    render() {
        return (
            <>
                <Navbar lists={this.state.items}/>
                <div className='container mt-3'>
                    <TodosAdd item={this.state.todo} addItems={this.formHandeler} changeItem={ this.changeHandler }/>
                    <TodosList lists={this.state.items}/>
                </div>
            </>
        )
    }
}

export default Todos
