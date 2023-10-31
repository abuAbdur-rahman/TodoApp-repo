import React from 'react'

import Wrapper from './child.style'

const ToDoList = ({EDIT, time, toDo, date, ondblclick, id, remainder, setReminder, type, DELETE}) => {
  const GetActualTime = ()=>{
    return new Date(date).toDateString()
  }
  const GetActualTimeTime = ()=>{
    const newTime = time.split(":")
    let hr = parseInt(newTime[0],10)
    const min = newTime[1]
    let amPM = 'AM'
    if(hr>=12){amPM = 'PM'; if (hr>12){hr -=12} }
    return `${hr}:${min} ${amPM}`
  }
  const [state, setState] = React.useState(false)


  const remainderStyle = {
    borderRightColor: remainder? "green":"black",
    borderRightWidth: "10px",
    borderRightStyle: "solid"
  }
  const extraButtonStyle = {
    marginLeft: type === 'list'? "0px" : "0px"
  }
  function Buttons() {
    return (
      <div>
        <button style={extraButtonStyle} onClick={()=> ondblclick(id)}>{type ==='list'?"Remove": "Recover"}</button>
        {type !== 'list' && <button style={extraButtonStyle} onClick={()=>DELETE(id)}>Delete</button>}
        {type === 'list' && <button style={extraButtonStyle} onClick={()=>EDIT(id)}>Edit</button>}
      </div>
     );
  }
  return (
    <Wrapper>
      <div 
      style={remainderStyle}
      onDoubleClick={()=>{
        setState(prev => !prev)
      }}
      >
        <h3 onClick={()=>{type === 'list' && setReminder(id)}} >{toDo} </h3>
        <p>{GetActualTime()}  |  {GetActualTimeTime()}</p>
        {state && <Buttons />}
      </div>
    </Wrapper> 
  )
}

export default ToDoList;

