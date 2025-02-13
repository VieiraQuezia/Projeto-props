// import guilherme from "./assets/guilherme.png"
// import hayeska from "./assets/hayeska.png"
// import leonardo from "./assets/leonardo.png"
// import quezia from "./assets/quezia.png"
// import instagram from "./assests/instagram.png"

import guilherme from "./assets/guilherme.png"
import hayeska from "./assets/hayeska.png"
import leonardo from "./assets/leonardo.png"
import quezia from "./assets/quezia.png"
import instagram from "./assests/instagram.png"
import logo from "./assets/logo.png";
import Usuarios from "./components/Usuarios.jsx";
import "./App.css";
import Lado from './components/lado'
import Cabecalho from "./components/header.jsx";


function App() {
  return (
    <>
    <header>
      <Cabecalho/>
    </header>
    <article className="Blocao">
        <Usuarios />
        <Lado/>
      </article>
    </>
  );
}

export default App;
