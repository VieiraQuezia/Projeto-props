// import guilherme from "./assets/guilherme.png"
// import hayeska from "./assets/hayeska.png"
// import leonardo from "./assets/leonardo.png"
// import quezia from "./assets/quezia.png"
import gmail from '../src/assets/gmail.png'
import instagram from '../src/assets/instagram.png'
import logo from "./assets/logo.png";
import Usuarios from "./components/Usuarios.jsx";
import "./App.css";
import Lado from './components/lado'
import Footer from './components/Footer.jsx';



function App() {
  return (
    <>
      <div className="cabeca">
        <img src={logo} alt="Logo do Grupo" />
        <h1>DESAFIO 1 de PROPS - REACT</h1>
      </div>
      <div className="meio">
        <Usuarios />
        <Lado/>
      </div>


      <Footer imge={instagram} texto="@vieiraquezia08" />
      <Footer imge={gmail} texto="vieiraquezia24@gmail.com"/>
      <Footer texto="Responsável pelo desenvolvimento: Quezia Amaral Vieira"/>
    </>
  );
}

export default App;
