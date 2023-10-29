//css

import './App.css';
import React from 'react';

// Components
import Header from './Component/Header';
import InputForm from './Component/InputForm';
import ToDoLists from './Component/ToDoLists';
import DeletedLists from './Component/DeletedLists';

//api
import toDos from "./toDos"

function App() {
  const NewLists = localStorage.getItem("Lists")
  const UnRecLists = localStorage.getItem("DeletedLists")
  const [lists, setLists] = React.useState(JSON.parse(NewLists) || toDos)
  const [isOpen, setIsOpen] = React.useState(false)
  const [deletedLists, setDeletedLists] = React.useState(JSON.parse(UnRecLists) || [])

  React.useEffect(()=>{
    localStorage.setItem("Lists", JSON.stringify(lists))
  },[lists])
    React.useEffect(()=>{
    localStorage.setItem("DeletedLists", JSON.stringify(deletedLists))
  },[deletedLists])

  const ondblclick = (key) => {
    const deleted = lists.find(list => list.id === key)
      setDeletedLists(prev => [...prev, deleted])
      const newLists = lists.filter(obj => obj !== deleted)
    setLists(newLists)
  }
  const recover = (key) => {
    const recoveringList = deletedLists.find(list => list.id === key)
    setLists(previous => [...previous, recoveringList].sort((a,b) => new Date(a.date) - new Date(b.date)))
    const newLists = deletedLists.filter(obj => obj !== recoveringList)
    setDeletedLists(newLists)
    /*
    const deleted = lists.find(list => list.id === key)
  s etDeletedLists(prev => [...prev, deleted])
    const newLists = lists.filter(obj => obj !== deleted)
     setLists(newLists)
    */
}
  const setReminder = (id)=>{

    const updatedLists = lists.map(list => list.id === id?{...list, remainder : !list.remainder}: list)
    setLists(updatedLists);
  }

  return (
    <>
      <Header 
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      />

      {
        isOpen && 
        <InputForm 
          setter={setLists}
          Setter = {setIsOpen}
        />
      }

      {
        lists.length >= 1 ?
        <ToDoLists
        list = {lists} 
        ondblclick={ondblclick}
        setReminder={setReminder}
        setDeletedLists = {setDeletedLists}
      />
        : <div className='empty'>
            <h1> Nothing To Display Yet</h1>
            <p> You can click the Add new button above to Add New Todo...</p>
          </div>

      }

      <DeletedLists
         deletedLists = {deletedLists}
         recover = {recover}
      />

    </>
  );
}

export default App;
