import logo192 from './logo192.png'
function Header(){
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={logo192} alt="logo" style={{ width: '70px', height: '70px' }} />
                Gallery App
                </a>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                <a href='/signin' style={{padding:'5px', color:'white'}}>Login</a>
                <a href='/signup' style={{padding:'5px', color: 'white'}}>Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Header