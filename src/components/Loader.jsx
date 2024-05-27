// import loaderEmpty from "../images/loader-empty.svg";

const Loader = ({ bananas }) => {
  const width = ((bananas + 1) / 7) * 100;

  return (
    <div className="w-[400px] z-10 transform transition h-6 fixed top-10 left-0 right-0 mx-auto rounded-full bg-gray-50 ">
      <div style={{ width: `${width}%`, height: "100%" }}>
        <img
          className="w-full h-full object-cover rounded-full"
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716782141/zrqk7ja7tuskiumfus0n.svg"
          alt=""
        />
      </div>
      <img
        src="https://res-console.cloudinary.com/djysychfq/thumbnails/v1/image/upload/v1716772749/c2p2YTZkanNvZXh4dmlvN2ttdDA=/drilldown"
        className="absolute -right-8 -top-6 w-20"
        alt="banana"
      />
    </div>
  );
};

export default Loader;
