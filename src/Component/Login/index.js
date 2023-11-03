import React from 'react'
//Header
import Header from '../Header'
//style
import Wrapper from '../InputForm/InputForm.style'


function Login({logins, setLogins, setAproval}) {
    const userNameRef = React.useRef(null)
    const passwordRef = React.useRef(null)
    const [error, setError] = React.useState(false)
    const [show, setShow] = React.useState(false) 

    const hasSignedUp = logins?true:false
    const extraStyle = {
        borderColor: 'red',
        borderWidth: "1px",
        borderStyle: 'solid'
    }
    const handleChange = () =>{
        if(hasSignedUp){
            if (error) {
                setError(true)
            }
        }
    }
    const handleLogin = (e)=>{
        e.preventDefault()
        if(hasSignedUp){
            passwordRef.current.value === logins.password?setAproval(true):setError(true)
        }
        else{
            if(userNameRef.current.value !== "" && passwordRef.current.value !== ""){
                setAproval(true)
                setLogins({
                    userName: userNameRef.current.value,
                    password: passwordRef.current.value
                })
                
            }else{
                setError(true)
            }
        }
    }
    const extraParentStle = {
        marginTop: "100px",
        padding: "100px 0 100px 0",
        width: "30vw",
        backgroundColor: '#FFFFFF',
        border: '1px solid black'
    }
  return (
    <>
    <Header />
    <Wrapper style={extraParentStle}>
    <h1 style={{margin: '-90px 0 50px 0'}}>{hasSignedUp? "Log In To Your Account": "Sign Up "}</h1>
        <div>
            <label>Username <sup style={{color:"red"}}>*</sup></label>
            {hasSignedUp?
            <input 
                type='text'
                name='userName'
                id='userName'
                value={logins.userName}
                disabled
            />:
            <input
                placeholder="Enter Your first username" 
                type='text'
                name='userName'
                id='userName'
                ref={userNameRef}
                style={error?extraStyle: null}
            />
            }
        </div>
        <div>
            <label>Password <sup style={{color:"red"}}>*</sup></label>
            <input 
                type={show? 'text' :'password'} 
                name='password'
                id='password'
                ref={passwordRef}
                onChange={handleChange}
                style={error?extraStyle:null}
                onDoubleClick = {() => setShow(prev =>!prev)} 
            />
        </div>
        <button onClick={(e)=> {handleLogin(e)}}>{hasSignedUp?'Log In':'Sign Up'}</button>
    </Wrapper>
    </>
  )
}

export default Login
