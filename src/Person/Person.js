import React from "react";

const person = (props) =>{
    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <input type="text" value={props.name} className="from-control" onChange={props.change}/>
                </div>
                <p>I am {props.name} and i am {props.age} years old.</p>
                <button onClick={props.click} className="btn btn-danger">Delete </button>
            </div>
        </div>
    )
};

export default person;
