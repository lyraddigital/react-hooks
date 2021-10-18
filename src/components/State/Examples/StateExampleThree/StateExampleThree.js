import { useState } from "react";

export const StateExampleThree = () => {
    const [todos, setTodos] = useState([]);

    const createTodo = (description) => {        

    };

    const updateTodo = (index) => {        

    };

    const removeTodo = (index) => {

    };

    const todosEl = todos.map((t, i) => (
        <li key={i} style={ { display: 'flex', justifyContent: 'space-between' } }>
            <div>{ t.description }</div>
            <div style={ { display: 'flex', columnGap: '5px' }}>
                <div>{ t.isActive ? 'Active': 'Inactive' }</div>
                <button onClick={() => updateTodo(i, t) }>Update</button>
                <button onClick={() => removeTodo(i) }>Delete</button>
            </div>
        </li>
    ));

    console.log('Rending State Example Three');

    return (
        <>
            <ul>
                { todosEl }
            </ul>
            <button onClick={ () => createTodo('Test') }>Create Todo</button>
        </>
    );
}