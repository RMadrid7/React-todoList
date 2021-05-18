import {useState} from 'react';
import { v4 } from 'uuid';

const Edit = ({add}) =>{
    const [input,setInput] = useState("");
    const inputChange = (e) =>{
        return setInput(e.target.value)
    }
    const [time,setTime] = useState("");
    const timeChange = (e) =>{
        return setTime(e.target.value)
    }
    const [date,setDate] = useState("");
    const dateChange = (e) =>{
        return setDate(e.target.value)
    }
    const addItem = () =>{
        return add((prev)=>{
            return [...prev,{
                id:v4(),
                input,
                time,
                date
            }]
        })
    }
    return (
        <div>
            <p>Content</p>
            <input type="text" value={input} onChange={inputChange}/>
            <p>Time</p>
            <input type="time" value={time} onChange={timeChange}/>
            <p>Date</p>
            <input type="date" value={date} onChange={dateChange}/>
            <button onClick={addItem}>Submit</button>
        </div>
    )
}

export default Edit;
