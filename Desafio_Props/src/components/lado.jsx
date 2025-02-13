import "./lado.css"

function Lado(props) {
  return (
    <>
        <h2>Valores do grupo</h2>
        <ul>
          <li>{props.val1}</li>
          <li>{props.val2}</li>
          <li>{props.val3}</li>
        </ul>
    </>
  );
}

export default Lado