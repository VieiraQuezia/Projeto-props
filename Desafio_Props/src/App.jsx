import guilherme from "./assets/guilherme.png"
import hayeska from "./assets/hayeska.png"
import leonardo from "./assets/leonardo.png"
// import quezia from "./assets/quezia.png"
import instagram from "./assets/instagram.png"
import gmail from '../src/assets/gmail.png'
import Usuarios from "./components/Usuarios.jsx";
import "./App.css";
import Lado from './components/lado'
import Cabecalho from "./components/header.jsx";
import Footer from "./components/Footer.jsx"


function App() {
  return (
    <>
      <header>
        <Cabecalho />
      </header>
      <div className="meio">
      <article className="bloco">
        <Usuarios nome="Guilherme G. Santana" img={guilherme} hobby="Sair com a namorada" />
        <Usuarios nome="Hayeska L. A. Machado" img={hayeska} hobby="Jogar vôlei" />
        <Usuarios nome="Leonardo M. Vicente" img={leonardo} hobby="Tocar piano" />
        {/* <Usuarios nome="Quezia A. Vieira" img={quezia} hobby="Jogar vôlei" /> */}
        </article>
        <div className="lado">
        <Lado />
        </div>
      </div>
      <Footer imgi={instagram} insta="@vieiraquezia08" imge={gmail} email="vieiraquezia24@gmail.com" texto="Responsável pelo desenvolvimento: Quezia Amaral Vieira" />
    </>
  );
}

export default App;