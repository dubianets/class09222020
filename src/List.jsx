import React, {useState} from "react";


function List(props) {

    const [inputValue, setInputValue] = useState(0);

    return (

        <div>

            {props.list.map((el, i) => <div>
                 <button onClick={() => props.swapCounter(i,1)} disabled={i === props.list.length - 1}>down</button>
                 <button onClick={() => props.swapCounter(i,-1)} disabled={i === 0}>up</button>
                {el.title} :
                {el.count}
                { el.editInput && <input type='text' value={inputValue} onChange={(event) => setInputValue (+event.target.value)}/>}
                { !el.editInput && <button onClick={() => props.inputButtonSet(i)}>edit</button>}
                { el.editInput && <button onClick={() => props.inputCounter(inputValue,i)}>push</button>}
                { el.editInput && <button onClick={() => props.inputCancel(i)}>C</button>}
            </div>)}

        </div>
    )
}

export default List;