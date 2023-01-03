import { useState } from "react"

const Signin = ()=>{
const [email, setEmail] = useState()
const [loginpassword, setLoginPassword] = useState()

const handleSignin = (e) =>{
   e.preventDefault()
}

    return(
        <>
        <div className="container text-center">
        <div style={{ padding: '50px' }}>
        <form>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px' }}>
            <input onChange={(e) =>{setEmail(e.target.value)}} value={email} className="form-control" placeholder="E-mail"></input>
            </div>
            <br/>
            <div className="text-center"  style={{ width: '400px', display: 'inline-block', padding:'5px'}}>
            <input  onChange={(e) =>{setLoginPassword(e.target.value)}} value={loginpassword} className="form-control" placeholder="Password"></input>
            </div>
            <div>
            <a href='/signup' style={{padding:'5px'}}>New here? click to Sign Up</a>
            </div>
            
            <br/> 
            <button onClick={(e) => handleSignin(e)} className="btn btn-primary pa-10" type="submit">Sign In</button>
        </form>
        </div>
        </div>
        </>
    )
}

export default Signin
