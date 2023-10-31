import React from 'react'
//Header
import Header from '../Header'
//style
import Wrapper from '../InputForm/InputForm.style'


function Login({logins, setLogins, setAproval}) {
    const userNameRef = React.useRef(null)
    const passwordRef = React.useRef(null)
    const [error, setError] = React.useState(false)

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
        width: "100vw",
        backgroundColor: '#FFFFFF'
    }
  return (
    <>
    <Header />
    <Wrapper style={extraParentStle}>
    <h1 style={{margin: '-90px 0 50px 0'}}>{hasSignedUp? "Log In To Your Account": "Sign Up "}</h1>
        <div>
            <label>Username</label>
            {hasSignedUp?
            <input 
                type='text'
                name='userName'
                id='userName'
                value={logins.userName}
                disabled
            />:
            <input 
                type='text'
                name='userName'
                id='userName'
                ref={userNameRef}
                style={error?extraStyle: null}
            />
            }
        </div>
        <div>
            <label>Password</label>
            <input 
                type='password'
                name='password'
                id='password'
                ref={passwordRef}
                onChange={handleChange}
                style={error?extraStyle:null}
            />
        </div>
        <button onClick={(e)=> {handleLogin(e)}}>{hasSignedUp?'Log In':'Sign Up'}</button>
    </Wrapper>
    </>
  )
}

export default Login