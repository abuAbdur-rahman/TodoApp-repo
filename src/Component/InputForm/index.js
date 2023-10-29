//Styls
import Wrapper from "./InputForm.style"

//Hooks
import { useState } from "react"


const InputForm = ({setter, Setter}) => {
    const [state, setState] = useState({
        toDo: "",
        date: "",
        remainder: true
    })
    const [error, setError] = useState(false)
    const onChange = (event) => {
        let {name, value, type, checked} = event.target
        setState((prev) => ({
            ...prev,
            [name]: type === "checkbox"? checked : value
        }))
    }

    const submitInput = (e) => {
        e.preventDefault()
        if(state.toDo !== "" && state.date !== ""){
            setter((prev)=>{
                const newArr = [...prev, {...state, id: prev.length + 1}]
                const sortLists = [...newArr].sort((a,b) => new Date(a.date) - new Date(b.date))
                return sortLists;
            })
        }
        else{
            setError(true)
            return;
        }
        !error && Setter(prev => !prev)
    }
    const checkTodo = (error && state.toDo === "")
    const checkDate = (error && state.date === "")
    const stylesToDo = {
        borderColor: checkTodo? "red":"none",
        borderWidth: checkTodo ? 2:"none",
        borderStyle: checkTodo ? "solid":"none"
    }
    const stylesDate = {
        borderColor: checkDate? "red":"none",
        borderWidth: checkDate? 2:"none",
        borderStyle: checkDate? "solid":"none"
    }
    
    return(
        <Wrapper>
            <div>
            <label htmlFor="toDo"> Inpute your ToDo </label>
                <input 
                type="text" 
                onChange={onChange} 
                value={state.toDo}
                name="toDo"
                id="toDo"
                required
                style={stylesToDo}
                />
            </div>
            <div>
                <label htmlFor="date" style={{display: "block"}}> Select Date </label>
                <input 
                type="date" 
                onChange={(e)=>{onChange(e)}} 
                value={state.date}
                name="date"
                id="date"
                required
                style={stylesDate}
                />
            </div>
            <div>
                <input 
                type="checkbox" 
                onChange={onChange} 
                checked={state.remainder}
                name="remainder"
                id="remainder"
                className="checkbox"
                />
                <label htmlFor="remainder" className="label"> Do you want a remainder? </label>
            </div>

            <button onClick={submitInput}> ADD </button>
        </Wrapper>
    )
}

export default InputForm;