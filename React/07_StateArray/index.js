import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        setThingsArray(prevState => {
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }

    function removeItem() {
      setThingsArray( prevState => {
        const nextState = [...prevState]; // can't add pop() here, I think
        // js tries to perform on prevState BEFORE assigning to nextState
        // so we have to make it explicit to not touch prevState
        nextState.pop();
        return nextState;
      })
    }

    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            {thingsElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
