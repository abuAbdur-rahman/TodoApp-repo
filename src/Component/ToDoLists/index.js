// component
import ToDoList from "./Child";

//styles 
import Wrapper from "./ToDoLists.style";

import React from 'react'




const ToDoLists = ({list, ondblclick, setReminder, edit}) => {
    
    const Lists = list.map((listItem) => {
      return (
        <ToDoList 
          toDo={listItem.toDo} 
          date={listItem.date}
          id ={listItem.id}
          key={listItem.id}
          ondblclick = {ondblclick}
          remainder={listItem.remainder}
          setReminder = {setReminder}
          type = 'list'
          time={listItem.time}
          EDIT={edit}
        />
    )
    })
  return (
    <Wrapper>
        {Lists}
    </Wrapper>
  )
}

export default ToDoLists;