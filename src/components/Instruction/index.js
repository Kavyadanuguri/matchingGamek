import { Link } from "react-router-dom";
import "./index.css";
/*

import { useNavigate } from "react-router-dom"; onClick={() => nav("/activity")} onClick={() => nav("/yes")}
*/

const Instruction = () => {
  // const nav = useNavigate();
  return (
    <div className="bg-container">
      <div className="header">
        <div className="backbtn">
          <Link to="/yes">
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

      <div className="card3">
        <div className="rec1">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716778831/cg2uskeeije7ir5e2jwz.png"
            alt="pic"
          />
          <div className="card1">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778530/gqtlr8hchegp4svxbbra.png"
              alt="card1"
            />
          </div>

          <div className="card">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778560/d3agbiqk1oah8mh39m47.png"
              alt="card"
            />
          </div>

          <div className="no">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778698/gc0zrh2gouuebqfuzhvl.png"
              alt="no-1"
            />
          </div>

          <div className="cardh1">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778753/yrmjrlyzknb1xysvodlb.png"
              alt="cardh1"
            />
          </div>

          <div className="cardh11">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778794/rjpdefzbsq9qedsiaedo.png"
              alt="cardh11"
            />
          </div>
        </div>
        <div className="rec2">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716778831/cg2uskeeije7ir5e2jwz.png"
            alt="pic"
          />

          <div className="card2">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778858/ujoagxo37ymbiblqctei.png"
              alt="card2"
            />
          </div>

          <div className="cardh2">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778906/n7euu3upwjv56sjr4gfo.png"
              alt="cardh2"
            />
          </div>

          <div className="cardh22">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778934/t17vxb8aoiixeb6opiw1.png"
              alt="cardh22"
            />
          </div>
        </div>
        <div className="rec3">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716778831/cg2uskeeije7ir5e2jwz.png"
            alt="pic"
          />
          <div className="card30">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716778997/kfeh2w21lfad8pi1znzc.png"
              alt="card30"
            />
          </div>
          <div className="base3">
            <div className="cardh31">
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716779026/gqrsnp6cylx68gge4z5r.png"
                alt="cardh31"
              />
            </div>

            <div className="cardh32">
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716780209/wwm5k9noty8l78hxlota.png"
                alt="cardh32"
              />
            </div>

            <div className="cardh33">
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716779078/vnvp9hqmikl2dslmzo3s.png"
                alt="cardh33"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="thread">
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716779113/kxsifiznbic2fyfehqze.png"
          alt="Thread"
        />
      </div>

      <div className="playbtn">
        <Link to="/activity">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716779140/p1ttcstnuze4wzyi3lgn.png"
            alt="pic"
            className="play-btn"
          />
        </Link>
      </div>
    </div>
  );
};

export default Instruction;
