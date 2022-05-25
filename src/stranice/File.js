import '../App.css'
import { useState, useEffect, useRef} from 'react'

export default function File({send}){

    const [text, setText] = useState("");

    const submit = (e) => {
        e.preventDefault();
        send(text)
    }

    return(
        <div className='File'>
             <form onSubmit={submit}>
                <label>Add your own reasons:</label>
                <input type="text" required onChange = {(e) => setText(e.target.value)}></input>
                <input type="submit"/>

            </form>
        </div>
    )
}