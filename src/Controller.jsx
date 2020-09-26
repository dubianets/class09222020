import React, {useState} from "react";


function Controller(props) {

    const [inputTitle, setInputTitle] = useState('');

    const setInputT = (event) => {
        setInputTitle(event.target.value);

    }

    const [inputCounterValue, setInputCounterValue] = useState(0);

    const setInputCounterV = (event) => {
        setInputCounterValue(+event.target.value);

    }

    const addCounterButton = () => {
        props.addCounter(inputTitle,inputCounterValue );
        setInputTitle('');
        setInputCounterValue(0);
    }

    return (
        <div>

            <input type='text' placeholder='Counter Title' value={inputTitle} onChange={setInputT}/>
            <input type='text' placeholder='Counter value' value={inputCounterValue} onChange={setInputCounterV}/>
            <button onClick={addCounterButton}>add counter</button>
            <hr/>

        </div>
    )
}

export default Controller;