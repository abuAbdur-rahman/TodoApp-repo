//css

import './App.css';
import React, { useEffect } from 'react';

// Components
import InterFace from './InterFace';
import Login from './Component/Login';


function App() {
  const LOGINS = localStorage.getItem('login')

  const [logins, setLogins] = React.useState(JSON.parse(LOGINS))
  const [approved, setAproval] = React.useState(false)

  useEffect(()=>{
      localStorage.setItem('login', JSON.stringify(logins))
  },[logins])

  return(
    <>
      {approved?null:

          <Login 
            logins = {logins}
            setLogins = {setLogins}
            setAproval = {setAproval}
            />
}
      {
        approved? 
          <InterFace 
          setLogins={setAproval} 
          loggedIn={approved}
          nameData = {logins}
          />
          : null
      }
{/*       <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<InterFace />}></Route>
      </Routes> */}
    </>
  )
}

export default App;
