import React from 'react'
import ToDoList from './ToDoLists/Child'

const DeletedLists = ({deletedLists, recover}) => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    const setDelete = () => {
        setIsOpen(prev => !prev)
    }
    console.log(deletedLists)
    const Display = deletedLists.map((list) => (
                        <ToDoList 
                            toDo={list.toDo}
                            date={list.date}
                            remainder={list.remainder}
                            id={list.id}
                            key={list.id}
                            ondblclick ={recover}
                        />
                    ))
  return (
    <footer>
        <p onClick={()=>{setDelete()}}>Deleted Todos</p>
        {isOpen && Display}
    </footer>
  )
}


export default DeletedLists;