import React, { useState } from "react";
import { Link } from "react-router-dom";

const Activity = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  console.log(value1);
  console.log(value2);
  return (
    <div className="bg-container">
      <div className="header">
        <div className="backbtn">
          <Link to="/instruction">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
              alt="pic"
              className="back-btn"
            />
          </Link>
        </div>

        <div className="top">
          <div className="progressbar">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716700975/vusuaqxrpkjiah3qz4zn.png"
              alt="pic"
              className="progress-bar"
            />
          </div>
          <div className="bananabw">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716701020/tgmttpy8am3qzeyyxdvr.png"
              alt="pic"
              height={90}
            />
          </div>
        </div>
      </div>

      <div className="msgb">
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716780528/jpcruwryrf5nwyazxmjp.png"
          alt="msgbox"
          className="msg-box"
          width={400}
          height={80}
        />
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716780567/qwbnuw8isseh7mpyfnz0.png"
          alt="headingActivity"
          className="acthead"
        />
      </div>
      {/* ----------------------------- */}
      <div className="maincard">
        <div className="left">
          <div className="lc" onClick={() => setValue1(1)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716780601/vt1vif4ygc9edeohk73a.png"
              alt="lc"
            />
          </div>

          <div className="lc" onClick={() => setValue1(2)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716780601/vt1vif4ygc9edeohk73a.png"
              alt="lc"
            />
          </div>

          <div className="lc" onClick={() => setValue1(3)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716780601/vt1vif4ygc9edeohk73a.png"
              alt="lc"
            />
          </div>

          <div className="lc" onClick={() => setValue1(4)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716780601/vt1vif4ygc9edeohk73a.png"
              alt="lc"
            />
          </div>

          <div className="lc" onClick={() => setValue1(5)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716780601/vt1vif4ygc9edeohk73a.png"
              alt="lc"
            />
          </div>

          <div className="lc" onClick={() => setValue1(6)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716780601/vt1vif4ygc9edeohk73a.png"
              alt="lc"
            />
          </div>
        </div>

        <div className="right">
          <div className="rc" onClick={() => setValue2(1)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778858/ujoagxo37ymbiblqctei.png"
              alt="rc"
            />
          </div>

          <div className="rc" onClick={() => setValue2(2)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778858/ujoagxo37ymbiblqctei.png"
              alt="rc"
            />
          </div>

          <div className="rc" onClick={() => setValue2(3)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778858/ujoagxo37ymbiblqctei.png"
              alt="rc"
            />
          </div>

          <div className="rc" onClick={() => setValue2(4)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778858/ujoagxo37ymbiblqctei.png"
              alt="rc"
            />
          </div>

          <div className="rc" onClick={() => setValue2(5)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778858/ujoagxo37ymbiblqctei.png"
              alt="rc"
            />
          </div>

          <div className="rc" onClick={() => setValue2(6)}>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778858/ujoagxo37ymbiblqctei.png"
              alt="rc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
