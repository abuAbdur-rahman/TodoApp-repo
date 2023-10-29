import React from 'react'

import Wrapper from './child.style'

const ToDoList = ({toDo, date, ondblclick, id, remainder, setReminder, type, DELETE}) => {
  const GetActualTime = ()=>{
    return new Date(date).toDateString()
  }
  const [state, setState] = React.useState(false)


  const remainderStyle = {
    borderRightColor: remainder? "green":"black",
    borderRightWidth: "10px",
    borderRightStyle: "solid"
  }
  const extraButtonStyle = {
    marginLeft: type === 'list'? "150px" : "0px"
  }
  function Buttons() {
    return (
      <div>
        <button style={extraButtonStyle} onClick={()=> ondblclick(id)}>{type ==='list'?"Remove": "Recover"}</button>
        {type !== 'list' && <button style={extraButtonStyle} onClick={()=>DELETE(id)}>Delete</button>}
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
        <p>{GetActualTime()}</p>
        {state && <Buttons />}
      </div>
    </Wrapper> 
  )
}

export default ToDoList;

