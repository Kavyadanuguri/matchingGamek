import React from "react";
import "./Landing.css";
import Monkey from "../assets/Monkey.png";
import Msgbox from "../assets/Msgbox.png";
import Yesbtn from "../assets/Yesbtn.png";
// import btn from "../assets/Nextbtn.png";
import Star from "../assets/Star.png";
import Cog from "../assets/Cog.png";
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Backbtn from "../assets/Backbtn.png";
import Heading3 from "../assets/Heading3.png";
import BananaBW from "../assets/BananaBW.png";
import ProgressBar from "../assets/ProgressBar.png";
import { useNavigate } from "react-router-dom";

const Landing3 = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="backbtn" onClick={() => nav("/next")}>
          <img src={Backbtn} alt="pic" />
        </div>

        <div className="top">
          <div className="progressbar">
            <img src={ProgressBar} alt="pic" />
          </div>
          <div className="bananabw">
            <img src={BananaBW} alt="pic" height={100} />
          </div>
        </div>
      </div>

      <div className="heading3">
        <img src={Heading3} alt="pic" />
      </div>
      <div className="msgbox">
        <img src={Msgbox} alt="pic" />
      </div>
      <div className="monimg">
        <img src={Monkey} alt="pic" />
      </div>
      <div className="yesbtn" onClick={() => nav("/instruction")}>
        <img src={Yesbtn} alt="pic" />
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

export default Landing3;
