import guilherme from "./assets/guilherme.png"
import hayeska from "./assets/hayeska.png"
import leonardo from "./assets/leonardo.png"
import quezia from "./assets/quezia.png"
// import instagram from "./assests/instagram.png"
import logo from "./assets/logo.png";
import Usuarios from "./components/Usuarios.jsx";
import "./App.css";
import Lado from './components/lado'



function App() {
  return (
    <>
      <div className="cabeca">
        <img src={logo} alt="Logo do Grupo" />
        <h1>DESAFIO 1 de PROPS - REACT</h1>
      </div>
      <div className="meio">
        <Usuarios nome="Guilherme G. Santana" img={guilherme} hobby="Sair com a namorada"/>
        <Usuarios nome="Hayeska L. A. Machado" img={hayeska} hobby="Jogar vôlei"/>
        <Usuarios nome="Leonardo M. Vicente" img={leonardo} hobby="Tocar piano"/>
        <Usuarios nome="Quezia A. Vieira" img={quezia} hobby="Jogar vôlei"/>
        <Lado/>
      </div>
    </>
  );
}

export default App;
