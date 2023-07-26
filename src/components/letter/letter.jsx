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

  function handleClick() {
    if (selecting) {
      console.log("LARGOU: KEY: " + ind + " | LETER: " + lett);
      setSelection([ind, lett]);
      setSelecting(false);
    } else {
      console.log("A SIGURAR: KEY: " + ind + " | LETER: " + lett);
      setSelection([ind, lett]);
      setSelecting(true);
    }
  }

  // function down() {
  //   console.log("###############################");
  //   console.log("A SIGURAR: KEY: " + ind + " | LETER: " + lett);
  //   setSelection([ind, lett]);
  //   setSelecting(true);
  //   console.log("###############################");
  // }

  // function up() {
  //   console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  //   console.log("LARGOU: KEY: " + ind + " | LETER: " + lett);
  //   setSelection([ind, lett]);
  //   setSelecting(false);
  //   console.log("###############################");
  // }

  const found = isFound ? "found" : "letter";

  return (
    <div className={found} onClick={handleClick}>
      <div key={index} className="letterInner" id={"letterInner"}>
        {lett}
      </div>
    </div>
  );
}

export { Letter };
