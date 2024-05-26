import React from "react";
import "./Landing.css";
import Monkey from "../assets/Monkey.png";
import Msgbox from "../assets/Msgbox.png";
import Banana from "../assets/Banana.png";
import Nextbtn from "../assets/Nextbtn.png";
import Star from "../assets/Star.png";
import Cog from "../assets/Cog.png";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Backbtn from "../assets/Backbtn.png";
import Heading2 from "../assets/Heading2.png";
import { useNavigate } from "react-router-dom";

const Landing2 = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="heading2">
        <img src={Heading2} alt="pic" />
        <img className="bana" src={Banana} alt="pic" width={50} height={50} />
      </div>
      <div className="msgbox">
        <img src={Msgbox} alt="pic" />
      </div>
      <div className="monimg">
        <img src={Monkey} alt="pic" />
      </div>
      <div className="nextbtn" onClick={() => nav("/yes")}>
        <img src={Nextbtn} alt="pic" />
      </div>

      <div className="backbtn" onClick={() => nav("/")}>
        <img src={Backbtn} alt="pic" />
      </div>

      <div className="btn">
        <div className="strblock">
          <div className="topell">
            <img src={Ellipse2} alt="pic" />
          </div>
          <div className="star">
            <img src={Star} alt="pic" />
          </div>
          <div className="bottomell">
            <img src={Ellipse1} alt="pic" />
          </div>
        </div>

        <div className="settingblock">
          <div className="topell2">
            <img src={Ellipse2} alt="pic" />
          </div>
          <div className="cog">
            <img src={Cog} alt="pic" />
          </div>
          <div className="bottomell">
            <img src={Ellipse1} alt="pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
