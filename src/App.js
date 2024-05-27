import { Route, BrowserRouter, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Landing2 from "./components/Landing2";
import Landing3 from "./components/Landing3";
import Instruction from "./components/Instruction";
import Activity from "./components/Activity";

const App = () => {
  console.log("k");
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/next" component={Landing2} />
        <Route path="/yes" component={Landing3} />
        <Route path="/instruction" component={Instruction} />
        <Route path="/activity" component={Activity} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

/* import React, { useRef, useState } from "react";
import "./App.css";

import Instructions from "./components/Instructions";

import Game from "./components/Game";
import GameComplete from "./components/GameComplete";

const App = () => {
  const [screen, setScreen] = useState("intro");
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const bgAudioRef = useRef(null);

  const renderScreenContent = () => {
    switch (screen) {
      case "intro":
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716693360/t9zr3amolddnyzdwiodq.png"
                alt="Monkey"
                className="translate-y-20 h-[550px] w-[550px]"
              />
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716694779/qhcgb0mteli4vjmnugax.png"
                alt="cloud"
                className="absolute -top-14 left-[300px]"
              />
              <div className="absolute -top-14 left-[300px] w-full">
                <div className="absolute text-5xl font-extrabold top-16 left-16 text-[#11AEC6] w-full">
                  Welcome Kiddo!
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("mizoIntro");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716696996/lwie9vfkpnkxp6etsdg0.png"
                alt="start"
                className="absolute bottom-10 right-10 hover:scale-110 transition"
              />
            </button>
          </div>
        );
      case "mizoIntro":
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716693360/t9zr3amolddnyzdwiodq.png"
                alt="Monkey"
                className="translate-y-20 h-[550px] w-[550px]"
              />
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716694779/qhcgb0mteli4vjmnugax.png"
                alt="cloud"
                className="absolute -top-14 left-[300px]"
              />
              <div className="absolute -top-14 left-[300px] w-full">
                <div className="absolute text-5xl font-extrabold top-12 left-16 text-[#11AEC6] w-full">
                  Hi , I am Mizo ! <br /> and I love bananas
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("canYouHelp");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716699155/dxignz5cbeyhbxzxaptt.png"
                alt="start"
                className="absolute bottom-10 right-10 hover:scale-110 transition"
              />
            </button>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("intro");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
                alt="start"
                className="absolute top-10 left-10 hover:scale-110 transition"
              />
            </button>
          </div>
        );
      case "canYouHelp":
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716693360/t9zr3amolddnyzdwiodq.png"
                alt="Monkey"
                className="translate-y-20 h-[550px] w-[550px] animate-bounce"
              />
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716694779/qhcgb0mteli4vjmnugax.png"
                alt="cloud"
                className="absolute -top-14 left-[300px]"
              />
              <div className="absolute -top-14 left-[300px] w-full">
                <div className="absolute text-5xl font-extrabold top-12 left-12 text-[#11AEC6] w-full">
                  Can you help me get some ?
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("instructions");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716699155/dxignz5cbeyhbxzxaptt.png"
                alt="start"
                className="absolute bottom-10 right-10 hover:scale-110 transition"
              />
            </button>
            <button
              onClick={() => {
                audioRef?.current?.play();
                setScreen("mizoIntro");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
                alt="start"
                className="absolute top-10 left-10 hover:scale-110 transition"
              />
            </button>
          </div>
        );
      case "instructions":
        return (
          <div className="w-full h-full">
            <button
              className="absolute bottom-10 right-10 hover:scale-110 transition"
              onClick={() => {
                audioRef?.current?.play();
                setScreen("play");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716779140/p1ttcstnuze4wzyi3lgn.png"
                alt="start"
                className=""
              />
            </button>
            <button
              className="absolute top-10 left-10 hover:scale-110 transition"
              onClick={() => {
                audioRef?.current?.play();
                setScreen("mizoIntro");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
                alt="start"
              />
            </button>
            <Instructions />
          </div>
        );
      case "play":
        return (
          <div className="w-full h-full">
            <Game setScreen={setScreen} />
            <button
              className="absolute top-4 left-4 hover:scale-110 transition"
              onClick={() => {
                audioRef?.current?.play();
                setScreen("instructions");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
                alt="start"
                className="w-32 h-32"
              />
            </button>
          </div>
        );
      case "complete":
        return (
          <div className="w-full h-full">
            <GameComplete setScreen={setScreen} />
          </div>
        );
      case "gameOver":
        return (
          <div className="w-full h-full flex items-center justify-center">
            <audio className="hidden" autoPlay src="/audio/death.mp3" />
            <div className="flex items-center justify-center flex-col">
              <img
                className="w-[250px] h-[250px]"
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716783859/unll56tohzw3rvjdhyft.svg"
                alt="monkey"
              />
              <div className="text-[90px] text-red-500 font-extrabold">
                Game Over!
              </div>
            </div>
            <button
              className="absolute top-4 left-4 hover:scale-110 transition"
              onClick={() => {
                audioRef?.current?.play();
                setScreen("instructions");
              }}
            >
              <img
                src="https://res.cloudinary.com/djysychfq/image/upload/v1716699277/pdrqw84pxfb3ielvxt2d.png"
                alt="start"
                className="w-32 h-32"
              />
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const handleToggle = () => {
    if (bgAudioRef.current) {
      if (isPlaying) {
        bgAudioRef.current.pause();
      } else {
        bgAudioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen w-full relative"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/djysychfq/image/upload/v1716784229/pnftyfupofq1g4valj6o.svg)",
      }}
    >
      {renderScreenContent()}
      <audio className="hidden" ref={audioRef} src="/audio/click.mp3" />
      <audio className="hidden" ref={bgAudioRef} src="/audio/bgm.mp3" />
      <button className="fixed left-8 bottom-7" onClick={handleToggle}>
        {isPlaying ? (
          <img
            className="w-16 h-16 opacity-60"
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716784018/zbtl5njgmi0zgpujyf6k.svg"
            alt="no"
          />
        ) : (
          <img
            className="w-16 h-16 opacity-60"
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716783974/ccdipif3n5uhhp2slqg3.svg"
            alt="yes"
          />
        )}
      </button>
    </div>
  );
};

export default App;
*/
