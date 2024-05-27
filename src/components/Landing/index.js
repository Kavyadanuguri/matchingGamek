import { Link } from "react-router-dom";
import "./index.css";

const Landing = () => {
  return (
    <div className="bg-container">
      <div className="heading">
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716774781/zi4wdh9q2mi0vgolf4sb.png"
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
      <div className="startbtn">
        <Link to="/next">
          <img
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716696996/lwie9vfkpnkxp6etsdg0.png"
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

export default Landing;
