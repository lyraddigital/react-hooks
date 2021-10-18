export const StateExampleOne = () => {
    let counter = 0;

    const incrementCounter = () => {
        // This won't work
        counter++;
    };

    console.log('Rending State Example One');

    return (
        <div>
            <div>{ counter }</div>
            <button onClick={ incrementCounter }>Increment</button>
        </div>
    );
}