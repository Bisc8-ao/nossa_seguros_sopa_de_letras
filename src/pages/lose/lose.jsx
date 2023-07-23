import React, { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RxReload } from "react-icons/rx";
import { TimerContext } from "../../context/timerContext";
import { assets } from "../../assets";
import "./styles.scss";

const Lose = () => {
  const { resetState } = useContext(TimerContext);
  const { nossa_seguros } = assets();
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetState();
      navigate("/");
    }, 8000);

    return () => clearTimeout(timeoutId);
  }, [resetState, navigate]);

  return (
    <div className="wrapper_lo">
      <div className="first_content_lo">
        <div className="logo_container_lo">
          <img src={nossa_seguros} alt="Nossa Seguros Logo" />
        </div>
        <div className="text_container_lo">
          <p>
            PARA A PRÓXIMA,
            <br />
            SERÁ MELHOR!
          </p>
        </div>

        <Link to="/">
          <button className="btn_accept_lo" onClick={resetState}>
            <RxReload />
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Lose };
