import './styles.scss'
import { LEVEL_SETTINGS_MAP } from "../../constants";

/**
 * PanelControl - Componente que contém o botão de início/paragem, contagem de tempo, seleção de nível e pontuação do jogo
 *
 * @param {*} props (gameStarted, onGameStart, selectedLevel, onLevelChange, timer)
 * @returns objeto jsx
 */
function ControlPanel(props) {
  const {
    OnUserAddWord,
    gameStarted,
    onGameStart,
    selectedLevel,
    onLevelChange,
    timer,
  } = props;

  const gameStartedClass = gameStarted ? " gameStarted" : "";
  let top;

  function localTop() {
    if (JSON.parse(localStorage.getItem("TOPSCORE")) != null) {
      top = JSON.parse(localStorage.getItem("TOPSCORE"));
    } else {
      top = 0;
    }
  }

  localTop();
  return (
    <div id="panel-control">

      <div className={`timer_cp ${(timer <= 15) && 'end_time'}`}>
        {timer}
      </div>
      <div className="hide">
        <div className="gameButtons"></div>
        <div className="gameinfo">
          <div className="timer">
            <dt id="tmpJ">Tempo:</dt>
            <div id="gameTime"></div>
          </div>
          <div className="point">
            <dt id="pnt">Pontuação:</dt>
            <div id="points">0</div>
          </div>
          <div className="points-top">
            <dt id="pntT">TOP:</dt>
            <div id="pointsTop">{top}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ControlPanel };
