import './header.css'
import logo from "../assets/logo.png";


function Cabecalho(){
    
    return (
        <>
        <header className='cabeca'>

       <img src={logo} className="logo react" alt="React logo" />     
       <h1> REACT</h1>
        
    </header>
    </>
    )
}

export default Cabecalho