import { Link } from "react-router-dom";
import "./index.css";

const Landing3 = () => {
  return (
    <div className="bg-container">
      <div className="header">
        <div className="back-btn">
          <Link to="/next">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
              alt="pic"
              className="back-btn"
            />
          </Link>
        </div>

        <div className="top">
          <div>
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716700975/vusuaqxrpkjiah3qz4zn.png"
              alt="pic"
              className="progress-bar"
            />
          </div>
          <div className="banana-bw">
            <img
              src="https://res.cloudinary.com/djysychfq/image/upload/v1716701020/tgmttpy8am3qzeyyxdvr.png"
              alt="pic"
              height={90}
            />
          </div>
        </div>
      </div>

      <div className="heading3">
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716771366/ne5jnzse3vjunoehvvfs.png"
          alt="pic"
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
      <div className="yesbtn">
        <Link to="/instruction">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716701582/faxnt44kfs7p7h7srmqp.png"
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

export default Landing3;
