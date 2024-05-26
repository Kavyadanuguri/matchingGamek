import React, { useState } from "react";
import BananaBW from "../assets/BananaBW.png";
import ProgressBar from "../assets/ProgressBar.png";
import Backbtn from "../assets/Backbtn.png";
import Msgbox from "../assets/Msgbox.png";
import HeadingActivity from "../assets/HeadingActivity.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import { useNavigate } from "react-router-dom";
const Activity = () => {
  const nav = useNavigate();
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  console.log(value1);
  console.log(value2);
  return (
    <div>
      <div className="header">
        <div className="backbtn" onClick={() => nav("/instruction")}>
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

      <div className="msgb">
        <img src={Msgbox} alt="msgbox" width={400} height={150} />
        <img src={HeadingActivity} alt="headingActivity" className="acthead" />
      </div>
      {/* ----------------------------- */}
      <div className="maincard">
        <div className="left">
          <div className="lc" onClick={() => setValue1(1)}>
            <img src={card1} alt="lc" />
          </div>

          <div className="lc" onClick={() => setValue1(2)}>
            <img src={card1} alt="lc" />
          </div>

          <div className="lc" onClick={() => setValue1(3)}>
            <img src={card1} alt="lc" />
          </div>

          <div className="lc" onClick={() => setValue1(4)}>
            <img src={card1} alt="lc" />
          </div>

          <div className="lc" onClick={() => setValue1(5)}>
            <img src={card1} alt="lc" />
          </div>

          <div className="lc" onClick={() => setValue1(6)}>
            <img src={card1} alt="lc" />
          </div>
        </div>

        <div className="right">
          <div className="rc" onClick={() => setValue2(1)}>
            <img src={card2} alt="rc" />
          </div>

          <div className="rc" onClick={() => setValue2(2)}>
            <img src={card2} alt="rc" />
          </div>

          <div className="rc" onClick={() => setValue2(3)}>
            <img src={card2} alt="rc" />
          </div>

          <div className="rc" onClick={() => setValue2(4)}>
            <img src={card2} alt="rc" />
          </div>

          <div className="rc" onClick={() => setValue2(5)}>
            <img src={card2} alt="rc" />
          </div>

          <div className="rc" onClick={() => setValue2(6)}>
            <img src={card2} alt="rc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
