/**
 * Letter
 *
 * Representa uma letra (em jsx) a ser apresentada num tabuleiro
 *
 * @param {*} param0 Letra a ser apresentada
 * @param {*} param1 key
 * @returns letra em jsx
 */
function WordFind(props) {
  const { item } = props;
  const found = item[3] ? "foundWord" : "";

  return (
    <div className={found}>
      {/* {item[0] + " - " + item[1]} */}
      {item[0]}
    </div>
  );
}

export { WordFind };
