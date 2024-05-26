import React from "react";
import "./Landing.css";
import Monkey from "../assets/Monkey.png";
import Msgbox from "../assets/Msgbox.png";
import Heading from "../assets/Heading.png";
import Startbtn from "../assets/Startbtn.png";
import Star from "../assets/Star.png";
import Cog from "../assets/Cog.png";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="heading">
        <img src={Heading} alt="pic" />
      </div>
      <div className="msgbox">
        <img src={Msgbox} alt="pic" />
      </div>
      <div className="monimg">
        <img src={Monkey} alt="pic" />
      </div>
      <div className="startbtn" onClick={() => nav("/next")}>
        <img src={Startbtn} alt="pic" />
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

export default Landing;
