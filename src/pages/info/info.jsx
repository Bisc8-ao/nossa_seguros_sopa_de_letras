import "./styles.scss";
import { assets } from "../../assets";

import React, { useContext } from "react";
import { LEVEL_SETTINGS_MAP } from "../../constants";
import { TimerContext } from "../../context/timerContext";
import { Link, useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();

  const { shuffleLetters, setGameStarted, setSelectedLevel } =
    useContext(TimerContext);

  const { nossa_seguros } = assets();

  return (
    <div className="wrapper_ab">
      <div className="first_content_ab">
        <div className="logo_container_ab">
          <img src={nossa_seguros} alt="Nossa Seguros Logo" />
        </div>
        <div className="text_container_ab">
          <p>
            TEM <span>15 SEGUNDOS</span> <br />
            PARA LOCALIZAR
            <br /> TODAS AS PALAVRAS
          </p>
        </div>
        <button
          className="btn_accept_ab"
          onClick={() => {
            handleClick(
              navigate,
              setGameStarted,
              setSelectedLevel
            );
          }}
        >
          <strong>ACEITO O DESAFIO</strong>
        </button>
        <p>
          <span className="description_ab">TOQUE PARA JOGAR</span>
        </p>
      </div>
    </div>
  );
};

function handleClick(
  navigate,
  setGameStarted,
  setSelectedLevel
) {
  setSelectedLevel("1");
  setGameStarted(false);
  navigate("/game");
}

export { Info };
