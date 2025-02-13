import './Footer.css'

function Footer (props) {
    return (
        <>
        <div className='Footer'> 
           <img src={props.imge} />
           <p>{props.texto}</p> 
        </div>
        
        </>
    )
}

export default Footer