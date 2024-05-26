import React from "react";
import "./Landing.css";
import BananaBW from "../assets/BananaBW.png";
import ProgressBar from "../assets/ProgressBar.png";
import Backbtn from "../assets/Backbtn.png";
import Playbtn from "../assets/Playbtn.png";
import Rectangle from "../assets/Rectangle.png";
import Thread from "../assets/Thread.png";
import no_1 from "../assets/no_1.png";
import card from "../assets/card.png";
import card1 from "../assets/card1.png";
import CardH1 from "../assets/CardH1.png";
import CardH11 from "../assets/CardH11.png";
import CardH2 from "../assets/CardH2.png";
import CardH22 from "../assets/CardH22.png";
import card2 from "../assets/card2.png";
import card30 from "../assets/card30.png";
import CardH31 from "../assets/CardH31.png";
import CardH32 from "../assets/CardH32.png";
import Cardh33 from "../assets/Cardh33.png";
import { useNavigate } from "react-router-dom";
const Instruction = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="backbtn" onClick={() => nav("/yes")}>
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

      <div className="card3">
        <div className="rec1">
          <img src={Rectangle} alt="pic" />
          <div className="card1">
            <img src={card1} alt="card1" />
          </div>

          <div className="card">
            <img src={card} alt="card" />
          </div>

          <div className="no">
            <img src={no_1} alt="no-1" />
          </div>

          <div className="cardh1">
            <img src={CardH1} alt="cardh1" />
          </div>

          <div className="cardh11">
            <img src={CardH11} alt="cardh1" />
          </div>
        </div>
        <div className="rec2">
          <img src={Rectangle} alt="pic" />

          <div className="card2">
            <img src={card2} alt="card2" />
          </div>

          <div className="cardh2">
            <img src={CardH2} alt="cardh2" />
          </div>

          <div className="cardh22">
            <img src={CardH22} alt="cardh22" />
          </div>
        </div>
        <div className="rec3">
          <img src={Rectangle} alt="pic" />
          <div className="card30">
            <img src={card30} alt="card30" />
          </div>
          <div className="base3">
            <div className="cardh31">
              <img src={CardH31} alt="cardh31" />
            </div>

            <div className="cardh32">
              <img src={CardH32} alt="cardh32" />
            </div>

            <div className="cardh33">
              <img src={Cardh33} alt="cardh33" />
            </div>
          </div>
        </div>
      </div>

      <div className="thread">
        <img src={Thread} alt="Thread" />
      </div>

      <div className="playbtn" onClick={() => nav("/activity")}>
        <img src={Playbtn} alt="pic" />
      </div>
    </div>
  );
};

export default Instruction;
