import './../App.css';
import React, { Component } from 'react';
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputData: ""
        };
    }
    render() {
        return (
            <>
                <form className="container my-3">
                    <fieldset disabled>
                        <legend>Todo App</legend>
                        <div className="mb-3">
                            <label for="todo" className="form-label">Add a task!</label>
                            <input type="text" id="todo" className="form-control" placeholder="Try to type something" onChange={this.changeTodo} value={this.state}/>
                        </div>
{/*                         <div className="mb-3">
                            <label for="disabledSelect" className="form-label">Disabled select menu</label>
                            <select id="disabledSelect" className="form-select">
                                <option>Disabled select</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                                <label className="form-check-label" for="disabledFieldsetCheck">
                                    Can’t check this
                                </label>
                            </div>
                        </div> */}
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
            </>
        );
    };

}