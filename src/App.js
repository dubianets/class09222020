import React, {useState} from 'react';
import List from "./List";
import Controller from "./Controller";


const initialCounters = [
    {id: 1, title: 'Green', count: 5, editInput: false},
    {id: 2, title: 'Pink', count: 50, editInput: false},
    {id: 3, title: 'Orange', count: 20, editInput: false}
]

function App() {

    // const deleteById = (id) =>  {
    //    console.log(id);
    //    const filterOfCounter = list.filter(el => el.id !== id );
    //     setList(filterOfCounter);
    // }
    const [list, setList] = useState(initialCounters);

    const inputButtonSet = (index) => {
        const newInputButton = list.map((el, i) => {
            if(index === i ) return {...el, editInput: !el.editInput}
            return el;
        })

        setList(newInputButton);
    }



    const swapCounter = (index, val) => {
        const newList = [...list];
        const currentEl = newList[index];
        const preveesEl = newList[index + val];
        newList[index] = preveesEl;
        newList[index + val] = currentEl;
        setList(newList);
    }



    const inputCounter = (value, index) => {
        const newInputCounter = list.map((el, i) => {
            if(index === i) return {...el, count: value, editInput: !el.editInput};
            return el;
        })
        setList(newInputCounter)
    }

    const inputCancel = (index) => {
        const cancelInput = list.map((el, i) => {
            if(index === i) return  {...el, editInput: !el.editInput }
            return el;
        })
        setList(cancelInput);
    }

    const addCounter =(inputTitle, inputCounterValue) => {
        const newElement  = {
            id: Math.random(),
            title : inputTitle ,
            count: inputCounterValue,
            editInput: false
        }
        const newList = [...list];
        newList.push(newElement);
        setList(newList);
    }


    return (

        <div>

            <div>
                <Controller addCounter={addCounter}/>
            </div>

       <List list={list} key={Math.random()} swapCounter={swapCounter} inputButtonSet={inputButtonSet} inputCounter={inputCounter} inputCancel={inputCancel}/>

        </div>

    );
        // <div>
        //     counters
        //
        //     <ul>
        //
        //         {list.map(el => <li key={el.id}>  {el.title}
        //             <button>-</button>
        //             {el.count}
        //             <button>+</button>
        //             <button>+2</button>
        //             <button onClick={ () => deleteById(el.id)}>delete</button>
        //         </li>)}
        //
        //     </ul>
        //
        //     <input type="text" placeholder= "Counter title"/>
        //     <input type="text" placeholder = "Counter value"/>
        //     <button>Add counter</button>
        //
        // </div>
}

export default App;
