import "./styles.scss";
/**
 * Letter
 *
 * Representa uma letra (em jsx) a ser apresentada num tabuleiro
 *
 * @param {*} param0 Letra a ser apresentada
 * @param {*} param1 key
 * @returns letra em jsx
 */
function Letter(props) {
  const { lett, index, selecting, setSelecting, setSelection, isFound } = props;

  let ind = index;
  function click() {
    console.log("KEY: " + ind + " | LETER: " + lett);
    //setletter(lett);
  }

  function down() {
    console.log("A SIGURAR: KEY: " + ind + " | LETER: " + lett);
    setSelection([ind, lett]);
    setSelecting(true);
  }

  function up() {
    console.log("LARGOU: KEY: " + ind + " | LETER: " + lett);
    setSelection([ind, lett]);
    setSelecting(false);
  }

  const found = isFound ? "found" : "letter";

  return (
    <div className={found} onMouseDown={down} onMouseUp={up}>
      <div key={index} className="letterInner" id={"letterInner"}>
        {lett}
      </div>
    </div>
  );
}

export { Letter };
