"use client" /*all components in Next 13 by default are server components, therefore for client side interactivity we need to use "use client"*/
import { useState } from 'react';


var count = 0;
function Square() {
    const [value, setValue] = useState(null);
    function handleClick() {
        count +=1;
        console.log(count);
        value === 'X' || value == null && count % 2 === 0 ? setValue('O') : setValue('X');
    };

    return (<button className="square" onClick={handleClick}> {value} </button>)
}

export default function Board() {
    return (
        <div className="board">
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
        
    )
}