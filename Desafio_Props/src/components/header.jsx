import './header.css'


function cabecalho(props){
    
    return (
        <>
        <header>
            
       <h1> REACT</h1>
        <img src={props.logo} className="logo react" alt="React logo" />
       
    </header>
    </>
    )
}

export default cabecalho