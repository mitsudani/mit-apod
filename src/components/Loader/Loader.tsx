import { RevolvingDot } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center content-center w-full h-[calc(100vh-72px)]">
      <p className="text-center">Loading...</p>
      <RevolvingDot
        width="100"
        height="100"
        radius={50}
        color="#4fa94d"
        secondaryColor=""
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{ outerHeight: "100px" }}
        wrapperClass="flex-wrap"
        visible={true}
      />
    </div>
  );
};

export default Loader;
