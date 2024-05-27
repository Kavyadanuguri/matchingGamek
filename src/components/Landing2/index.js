import { Link } from "react-router-dom";
import "./index.css";

const Landing2 = () => {
  return (
    <div className="bg-container">
      <div className="heading2">
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716772690/quubnhmshvyeiaff3ht2.png"
          alt="pic"
        />
        <img
          className="bana"
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716772749/sjva6djsoexxvio7kmt0.png"
          alt="pic"
          width={50}
          height={50}
        />
      </div>
      <div className="msgbox">
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716771429/Msgbox_sv5ugn.png"
          alt="pic"
        />
      </div>
      <div className="monimg">
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716693360/t9zr3amolddnyzdwiodq.png"
          alt="pic"
        />
      </div>
      <div className="nextbtn">
        <Link to="/yes">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716699155/dxignz5cbeyhbxzxaptt.png"
            alt="pic"
          />
        </Link>
      </div>

      <div>
        <Link to="/">
          <img
            className="back-btn"
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
            alt="pic"
          />
        </Link>
      </div>

      <div className="btn">
        <div className="strblock">
          <div className="topell">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716771661/tz9jdz5uf3rwtkun07y8.png"
              alt="pic"
            />
          </div>
          <div className="star">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716771792/nljalpjglxiyirpukfgg.png"
              alt="pic"
            />
          </div>
          <div className="bottomell">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716771638/gfeeoy1zxix8gphws9tb.png"
              alt="pic"
            />
          </div>
        </div>

        <div className="settingblock">
          <div className="topell2">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716771661/tz9jdz5uf3rwtkun07y8.png"
              alt="pic"
            />
          </div>
          <div className="cog">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716771681/clgom6ojhsyvzelnwwoc.png"
              alt="pic"
            />
          </div>
          <div className="bottomell">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716771638/gfeeoy1zxix8gphws9tb.png"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing2;
