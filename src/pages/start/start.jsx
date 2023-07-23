import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";
import { assets } from "../../assets";
import "./styles.scss";

function Start() {
  const { call_center, nossa_seguros } = assets();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info");
  };

  return (
    <div className="wrapper_h">
      <div className="first_content_h">
        <div className="logo_container_h">
          <img src={nossa_seguros} alt="Nossa Seguros Logo" />
        </div>
        <div className="text_container_h">
          <p>BEM-VINDO À</p>
          <p>
            <span>NOSSA SEGUROS</span>.
          </p>
          <p>VAMOS TESTAR A</p>
          <p>
            <span>NOSSA ATENÇÃO</span>?
          </p>
        </div>
      </div>

      <footer>
        <button className="btn_footer_h" onClick={handleClick}>
          <strong>JOGAR</strong>
        </button>

        <div className="footer_container_h">
          <div className="image_container_h">
            <img src={call_center} alt="Call Center" width="100px" />
          </div>

          <div className="phone_h">
            <span className="">+244 923 190 860</span>
          </div>

          <div className="social_container_h">
            <ul>
              <li>
                <BiLogoFacebook />
              </li>
              <li>
                <BiLogoLinkedin />
              </li>
              <li>
                <BiLogoInstagram />
              </li>
              <li>
                <BiLogoYoutube />
              </li>
            </ul>
            <span className="nossa_link_h">www.nossaseguros.ao</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export { Start };
