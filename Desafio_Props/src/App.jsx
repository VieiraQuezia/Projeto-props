// import guilherme from "./assets/guilherme.png"
// import hayeska from "./assets/hayeska.png"
// import leonardo from "./assets/leonardo.png"
// import quezia from "./assets/quezia.png"
import logo from "./assets/logo.png";
import Usuarios from "./components/Usuarios.jsx";
import "./App.css";

import './components/header.jsx'
import './App.css'
import Lado from './components/lado'

import Usuarios from './components/Usuarios'


function App() {
  return (
    <>
      <div className="cabeca">
        <img src={logo} alt="Logo do Grupo" />
        <h1>DESAFIO 1 de PROPS - REACT</h1>
      </div>
      <div className="meio">
        <Usuarios />
      </div>

 

    <Usuarios/>

    <Lado/>
    </>
  );
}

export default App;
